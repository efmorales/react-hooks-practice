import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "../../src/08-useReducer/TodoItem"
// import { onDeleteTodo, onToggleTodo } from "../../src/08-useReducer/todoReducer"

describe('Tests in component <TodoItem />', () => { 

    const todo = {
        id: 1,
        desc: 'Learn React',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    }
    );
    
    test('should show pending todo', () => {

        render(<TodoItem 
            todo={todo}
            index={0}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const liElement = screen.getByRole('listitem');

        // console.log(liElement.outerHTML);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
        
    })

    test('should show done todo', () => {

        todo.done = true;

        render(<TodoItem 
            todo={todo}
            index={0}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const liElement = screen.getByRole('listitem');

        // console.log(liElement.outerHTML);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('align-self-center text-decoration-line-through');
        
    });

    test ('should call onToggleTodo when click on span', () => {
            
            render(<TodoItem 
                todo={todo}
                index={0}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />);
    
            const spanElement = screen.getByLabelText('span');
    
            fireEvent.click(spanElement);
    
            expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        }
    );

    test ('should call onDeleteTodo when click on delete button', () => {
            
            render(<TodoItem 
                todo={todo}
                index={0}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />);
    
            const deleteButton = screen.getByText('Delete');

            fireEvent.click(deleteButton);
    
            expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        }
    );


 })