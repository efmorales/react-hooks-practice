export const TodoAdd = ({ handleAddTodo }) => {

    
    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    name="description"
                    placeholder="New Task"
                    autoComplete="off"
                    className="form-control"
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    );
}
