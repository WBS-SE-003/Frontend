import { useState, useEffect } from 'react';
// import { getPostsWithoutValidation } from './post';
import { getPosts } from './post';
import { type Post } from './post';
export default function PostContainer() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const postData = await getPosts();
                // const postData = await getPostsWithoutValidation();
                setPosts(postData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
                console.log('Something went wrong');
            }
        }
        fetchPosts();
    }, []);

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            {posts?.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}
