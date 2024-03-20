import { screen, render } from '@testing-library/react';
import { useContext } from 'react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Tests in <HomePage />', () => {
    test('should display the component correctly without an user', () => {
        render(
            <UserContext.Provider value={{ user: null}}>

                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        // console.log(preTag.innerHTML)

        expect(preTag.innerHTML).toBe('null');

        // screen.debug();

    });

    test('should display the component correctly with a user', () => {

        const newUser = {
            id: 123,
            name: 'Roy Mustang',
            email: 'roy@gmail.com'
        }

        render(
            <UserContext.Provider value={{user : newUser}}>

                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        // console.log(preTag.innerHTML);

        expect(preTag.innerHTML).toEqual(JSON.stringify(newUser, null, 3));

        // screen.debug();

    })

})