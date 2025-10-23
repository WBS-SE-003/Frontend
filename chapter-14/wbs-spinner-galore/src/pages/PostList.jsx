import { useLoaderData } from 'react-router';
import { PostPreview } from '../components/PostPreview';

export function PostList() {
    const { posts } = useLoaderData();

    return (
        <div className='flex gap-2 flex-wrap justify-center'>
            {posts.map((post) => {
                return <PostPreview post={post} key={post.id} />;
            })}
        </div>
    );
}
