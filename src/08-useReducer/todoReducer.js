export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':

            return [...initialState, action.payload];

        case 'Delete Todo':
            // this filter will return a new array with all the todos that don't match the id
            return initialState.filter(todo => todo.id !== action.payload);

        default:
            return initialState;
    }

}