import { useReducer } from 'react';
import { Counter } from './Counter';
import { countReducer } from './countReducer';
const inititalCounters = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
];

export function CounterContainer() {
    const [counters, dispatch] = useReducer(countReducer, inititalCounters);
    return (
        <>
            <button onClick={() => dispatch({ type: 'INCREASE_ALL' })}>
                increase all
            </button>
            <button onClick={() => dispatch({ type: 'DECREASE_ALL' })}>
                decrease all
            </button>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    count={counter.count}
                    id={counter.id}
                    dispatch={dispatch}
                />
            ))}
        </>
    );
}
