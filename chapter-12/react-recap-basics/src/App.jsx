import { Card } from './components/Card';
import { LightBulb } from './components/Lightbulb';
import { Counter } from './components/Counter';
import { useEffect, useState } from 'react';

function App() {
    const greeting = 'Hello Students';

    const [posts, setPosts] = useState([]);

    function deletePost(id) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <h1 className='text-3xl underline text-yellow-600'>React Recap</h1>
            <p>{greeting}</p>

            <div className='flex gap-2 justify-center flex-wrap   '>
                {posts.map((post) => (
                    <Card key={post.id} post={post} deletePost={deletePost} />
                ))}
            </div>
            <LightBulb />
            <Counter />
        </>
    );
}

export default App;
