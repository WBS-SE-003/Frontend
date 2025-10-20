import { useToDoContext } from '../context/TodoContext';
function ToDoItem({ todo, dispatch }) {
    return (
        <>
            <li className='flex items-center mb-2'>
                <label>
                    <input
                        checked={todo.completed}
                        onChange={() =>
                            dispatch({ type: 'toggled_todo', id: todo.id })
                        }
                        type='checkbox'
                        className='mr-2'
                    />
                    {todo.text}
                </label>
            </li>
            <button
                onClick={() => dispatch({ type: 'deleted_todo', id: todo.id })}
            >
                X
            </button>
        </>
    );
}

export default ToDoItem;
