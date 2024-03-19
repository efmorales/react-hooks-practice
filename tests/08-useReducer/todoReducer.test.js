import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Tests for todoReducer', () => { 
    
    const initialState = [{
        id: 1,
        desc: 'Learn React',
        done: false
    }];

    test ('should return the default state', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test ('should add a new todo', () => {
        
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                desc: 'Learn Node',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test ('should delete a todo', () => {
        
        const action = {
            type: 'Delete Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test ('should toggle a todo', () => {
        
        const action = {
            type: 'Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
    });
 })

