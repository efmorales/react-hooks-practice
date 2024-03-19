
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    beforeEach(() => {

        jest.clearAllMocks();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement,
        });


    });

    test('should display the component correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));

        expect(screen.getByText('Pokemon Information'));

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });

        expect(nextButton.disabled).toBeFalsy();

        // screen.debug();

    });

    test('should render 4 pokemon imgs', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
                }
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        // screen.debug();

        // I expect that if I have 4 images rendered, then the test is passing

        expect(screen.getAllByRole('img').length).toBe(4);

    })

    test('should fetch the next page after pressing Next button', () => {
        // First call to useFetch returns data for the first Pokemon
        useFetch.mockReturnValueOnce({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
                }
            },
            isLoading: false,
            hasError: null
        });

        // Second call to useFetch simulates fetching data for the next Pokemon
        useFetch.mockReturnValueOnce({
            data: {
                id: 2, // ID increased by 1
                name: 'ivysaur',
                sprites: {
                    front_default: 'https://example.com/next-pokemon-front.png',
                    back_default: 'https://example.com/next-pokemon-back.png',
                    front_shiny: 'https://example.com/next-pokemon-front-shiny.png',
                    back_shiny: 'https://example.com/next-pokemon-back-shiny.png'
                }
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        // screen.debug();

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });

        act(() => {
            fireEvent.click(nextButton);
        });

        //waitFor will wait until the condition is true
        waitFor(() => {
            // Check if the new Pokemon data is rendered
            expect(screen.getAllByRole('img')[0].src).toBe('https://example.com/next-pokemon-front.png')

            // screen.debug();

        });

    });

    test('should check if the function increment is called', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });

        act(() => {
            fireEvent.click(nextButton);
        });

        expect(mockIncrement).toHaveBeenCalled();
    }

    );

})