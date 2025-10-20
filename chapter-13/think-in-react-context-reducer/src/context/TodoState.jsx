import { TodoContext } from './TodoContext';
import { useReducer, useState } from 'react';

function todoReducer(state, action) {
    switch (action.type) {
        case 'added_todo': {
            return [
                { id: Date.now(), text: action.newTodo, completed: false },
                ...state,
            ];
        }
        case 'toggled_todo': {
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        }
        case 'deleted_todo': {
            return state.filter((todo) => {
                return todo.id !== action.id;
            });
        }
    }
}

export function TodoState({ children }) {
    // const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed' && todo.completed) return true;
        if (filter === 'active' && !todo.completed) return true;
        return false;
    });

    return (
        <TodoContext
            value={{
                todos: filteredTodos,
                dispatch,
                filter,
                setFilter,
            }}
        >
            {children}
        </TodoContext>
    );
}
