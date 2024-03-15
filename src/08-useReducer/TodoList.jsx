import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {


    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo, i) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index={i}
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}
