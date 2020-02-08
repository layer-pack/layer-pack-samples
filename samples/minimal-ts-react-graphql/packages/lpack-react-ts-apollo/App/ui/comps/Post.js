import gql              from "graphql-tag";
import * as React       from "react";
import {useQuery}       from '@apollo/react-hooks';

const GetPostsQuery = gql`
    query GetPostsQuery {
        posts {
            _id
            title
            content
        }
    }
`;
export default function Posts( { onPostSelected } ) {
	const { loading, error, data } = useQuery(GetPostsQuery);
	
	if ( loading ) return 'Loading...';
	if ( error ) return `Error! ${error.message}`;
	
	return (
		<div name="post" onChange={onPostSelected}>
			{data.posts.map(post => (
				<div key={post.title}>
					{post.title}
				</div>
			))}
		</div>
	);
}