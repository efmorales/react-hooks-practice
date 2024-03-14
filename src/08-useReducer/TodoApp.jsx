import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [{
    id: new Date().getTime(),
    desc: 'Collect Soul Stone',
    done: false,
},
{
    id: new Date().getTime() * 3,
    desc: 'Collect Time Stone',
    done: false,
}];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleAddTodo = (newTodo = {
        id: new Date().getTime(),
        desc: 'New Task',
        done: false
    }) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1>TodoApp (10)<small>, Pending: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} dispatch={dispatch} />
                </div>

                <div className="col-5">
                    <h4>Add TODO</h4>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}
