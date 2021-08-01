/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import gql                                      from "graphql-tag";
import * as React                               from "react";
import * as ReactApollo                         from "react-apollo";
import {useQuery, useSubscription, useMutation} from '@apollo/react-hooks';

const POST_SUBSCRIPTION = gql`
    subscription onPostAdded {
        postAdded {
            _id
            title
            content
        }
    }
`;

const ADD_POST      = gql`
    mutation AddPost($title: String!) {
        createPost(title: $title) {
            _id
            title
        }
    }
`;
const GetPostsQuery = gql`
    query GetPostsQuery {
        posts {
            _id
            title
            content
        }
    }
`;

function WatchPosts( { onPostSelected } ) {
	const { data, error, loading } = useSubscription(POST_SUBSCRIPTION)
	//const { loading, data } = useQuery(GetPostsQuery);
	//const [addTodo, { data }] = useMutation(ADD_POST);
	
	if ( loading ) return 'Loading...';
	if ( error ) return `Error! ${error.message}`;
	return (
		<div name="post" onChange={onPostSelected}>
			{data && data.postAdded&& data.postAdded.title}
		</div>
	);
}

function ListPosts( { onPostSelected } ) {
	const { loading, data, error } = useQuery(GetPostsQuery);
	
	
	if ( loading ) return 'Loading...';
	if ( error ) return `Error! ${error.message}`;
	return (
		<div name="post" onChange={onPostSelected}>
			{data.posts.map((post,i) => (
				<div key={i}>
					{post.title}
				</div>
			))}
		</div>
	);
}

export default function Posts( { onPostSelected } ) {
	const [createPost, { data }] = useMutation(ADD_POST);
	let ref = React.createRef();
	return (
		<div name="post">
			<ListPosts/>
			<WatchPosts/>
			<div>
				<input type={"text"} ref={ref}/>
				<button onClick={e => {
					e.preventDefault();
					createPost({ variables: { title: ref.current.value } });
					
				}}>new</button>
			</div>
		</div>
	);
}