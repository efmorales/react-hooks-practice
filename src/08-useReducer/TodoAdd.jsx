import { useForm } from '../../src/hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, onResetForm, description } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {

        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();

    }


    return (
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Learn..."
                    className="form-control"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
    );
}
