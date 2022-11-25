import { Todo } from '../stores/todo';
import { observer } from 'mobx-react-lite';

type Props = {
    todo: Todo;
};

export const TodoView = observer(({todo}: Props) => (
    <li>
        <input 
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.toggle()}
        />
        {todo.title}
    </li>
));

