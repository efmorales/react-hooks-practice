import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
