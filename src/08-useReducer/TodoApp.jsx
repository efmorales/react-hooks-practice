import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

//     id: new Date().getTime(),
//     desc: 'Collect Soul Stone',
//     done: false,
// },

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        };

        dispatch(action);
        // console.log('handleNewTodo', todo);
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'Delete Todo',
            payload: todoId
        };

        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp (10)<small>, Pending: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } />
                </div>

                <div className="col-5">
                    <h4>Add TODO</h4>
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
