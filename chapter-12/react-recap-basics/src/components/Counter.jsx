import { useEffect, useState } from 'react';
export function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>count: {count}</p>

            <p>{count * 2}</p>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
}
