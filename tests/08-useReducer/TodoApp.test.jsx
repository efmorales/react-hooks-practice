import { render, screen, fireEvent } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('TodoApp tests', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                desc: 'Learn React',
                done: false
            },
            {
                id: 2,
                desc: 'Learn Mongo',
                done: true
            }
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodos: 1
    });

    test('should render TodoApp', () => {
        render(<TodoApp />);

        // screen.debug();

        expect(screen.getByText('1. Learn React')).toBeTruthy();
        expect(screen.getByText('2. Learn Mongo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

        // expect(screen.getByText('TodoApp')).toContain(': 0');
    }
    );

});
