import { makeAutoObservable } from 'mobx';
import { Todo } from './todo';

export interface TodoList {
    todos: Todo[];
    unfinishedCount: number;
}

export function createTodoList(todos: Todo[]): TodoList {
    return makeAutoObservable({
        todos,
        get unfinishedCount() {
            return this.todos.filter(todo => !todo.finished).length
        }
    });
}