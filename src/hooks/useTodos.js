import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = (initialState = []) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
        , [todos]);

    const todosCount = todos.length;

    const pendingTodos = todos.filter(todo => !todo.done).length;

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        };

        dispatch(action);
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'Delete Todo',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: 'Toggle Todo',
            payload: todoId
        });
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodos
    }

}