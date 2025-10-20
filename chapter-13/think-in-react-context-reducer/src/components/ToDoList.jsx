import ToDoItem from './ToDoItem';
import { useToDoContext } from '../context/TodoContext';

function ToDoList() {
    const { todos, dispatch } = useToDoContext();

    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    );
}

export default ToDoList;
