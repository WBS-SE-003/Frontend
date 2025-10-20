export function Counter({ count, id, dispatch }) {
    return (
        <>
            <button onClick={() => dispatch({ type: 'INCREASE_ONE', id: id })}>
                increase
            </button>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'DECREASE_ONE', id: id })}>
                decrease
            </button>
        </>
    );
}
