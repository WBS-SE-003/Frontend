import { useLoaderData } from 'react-router';

export function Post() {
    const { post } = useLoaderData();

    return (
        <div className='text-center text-5xl capitalize bg-red-100 p-22'>
            <p className='mb-10'>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}
