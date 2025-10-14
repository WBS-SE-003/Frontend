export function Card({ post, deletePost }) {
    function handleClick(id) {
        console.log(`post: ${id}`);
    }

    return (
        <div className='p-10 bg-amber-200'>
            {post.img ? <img src={post.img} alt='' /> : <p>no image</p>}
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button
                onClick={() => handleClick(post.id)}
                className='bg-blue-200 p-4'
            >
                Like
            </button>

            {post.recommendation && <p>Popular</p>}
            <button
                onClick={() => deletePost(post.id)}
                className='bg-red-400 p-4'
            >
                x
            </button>
        </div>
    );
}
