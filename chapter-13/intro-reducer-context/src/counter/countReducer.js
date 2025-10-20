export function countReducer(counters, action) {
    switch (action.type) {
        case 'INCREASE_ALL':
            return counters.map((counter) => ({
                ...counter,
                count: counter.count + 1,
            }));

        case 'DECREASE_ALL':
            return counters.map((counter) => ({
                ...counter,
                count: counter.count - 1,
            }));

        case 'INCREASE_ONE':
            return counters.map((counter) =>
                counter.id == action.id
                    ? { ...counter, count: counter.count + 1 }
                    : counter
            );
        case 'DECREASE_ONE':
            return counters.map((counter) =>
                counter.id == action.id
                    ? { ...counter, count: counter.count - 1 }
                    : counter
            );
    }
}
