import { Link } from 'react-router';
export function PostPreview({ post }) {
    return (
        <div className='bg-slate-100 w-44 text-center'>
            <Link to={`/posts/${post.id}`}>
                <p>No: {post.id}</p>
                <p className='p-4'>{post.title}</p>
            </Link>
        </div>
    );
}
