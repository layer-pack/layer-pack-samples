/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
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