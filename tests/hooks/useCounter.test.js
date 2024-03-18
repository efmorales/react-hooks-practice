import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/'

describe('Testing with useCounter hook', () => {
    test('should return values after functions', () => {

        const { result } = renderHook(() => useCounter())

        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        // expect (decrement).toBeInstanceOf(Function);
        // expect (increment).toBeInstanceOf(Function);
        // expect (reset).toBeInstanceOf(Function);
        // expect (typeof decrement).toBe('function');
        // expect (typeof increment).toBe('function');
        // expect (typeof reset).toBe('function');
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    })

    test('should generate a count of 100', () => {
        const { result } = renderHook(() => useCounter(100))

        const { counter } = result.current;

        expect(counter).toBe(100);

    })

    test('should increment the counter by 10 and then 2', () => {
        const { result } = renderHook(() => useCounter(100))

        const { increment } = result.current;

        act(() => {
            increment(10);
            increment(2);
        })

        const { counter } = result.current;

        expect(counter).toBe(112);

    });

    test('should decrement the counter by 10 and then 2', () => {
        const { result } = renderHook(() => useCounter(100))

        const { decrement } = result.current;

        act(() => {
            decrement(10);
            decrement(2);
        })

        const { counter } = result.current;

        expect(counter).toBe(88);

    });

    test('should reset the counter to 100', () => {
        const { result } = renderHook(() => useCounter(100))

        const { increment, reset } = result.current;

        act(() => {
            increment(10);
            reset();
        })

        const { counter } = result.current;

        expect(counter).toBe(100);

    });
})