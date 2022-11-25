import { observer } from 'mobx-react-lite';
import { TodoList } from '../stores/todo-list';
import { TodoView } from './todo';

type Props = {
    todoList: TodoList;
};

export const TodoListView = observer(({todoList}: Props) => (
    <div>
        <ul>
            {todoList.todos.map(todo => (
                <TodoView todo={todo} key={todo.id + ""} />
            ))}
        </ul>
        Tasks left: {todoList.unfinishedCount}
    </div>
));