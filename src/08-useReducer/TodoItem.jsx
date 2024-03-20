export const TodoItem = ({ todo, index, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span 
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
                onClick = { () => onToggleTodo(todo.id) }
                aria-label={'span'}

                >{index + 1}. {todo.desc}</span>
                <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTodo(todo.id)}
                >Delete</button>
            </li>
        </>
    )
}
