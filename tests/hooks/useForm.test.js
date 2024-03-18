import { renderHook, act } from '@testing-library/react'
import { useForm } from '../../src/hooks/'

describe('Testing with useForm hook', () => {
    test('should return a default form', () => {

        const initialForm = {
            name: 'Juan',
            email: 'juan@google.com'
        }

        const { result } = renderHook(() => useForm(initialForm));

        // console.log(result.current);

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('should change the form value (name)', () => {

        const initialForm = {
            name: '',
            email: ''
        }

        const { result } = renderHook(() => useForm(initialForm));

        const newName = 'Pedro';
        // const newEmail = 'pedro@gmail.com';

        // console.log(result.current);

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });
        })

        // console.log(result.current);

        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);



    })

    test('should perform the reset of the form', () => {

        const initialForm = {
            name: 'Test',
            email: 'test@gmail.com'
        }

        const { result } = renderHook(() => useForm(initialForm));


        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Pedro'
                }
            });

            onResetForm();
            
        })

        expect(result.current.formState).toEqual(initialForm);

    })

})