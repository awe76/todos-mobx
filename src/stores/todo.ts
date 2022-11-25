import { makeAutoObservable } from 'mobx';

export interface Todo {
    id: number;
    title: string;
    finished: boolean;
    toggle: () => void;
}

export function createTodo(title: string, finished = false): Todo {
    return makeAutoObservable({
        id: Math.random(),
        title,
        finished,
        toggle() {
            this.finished = !this.finished;
        }
    });
}