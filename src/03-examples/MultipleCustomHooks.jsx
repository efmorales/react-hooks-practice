import { useFetch } from '../hooks';

export const MultipleCustomHooks = () => {

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/690');

    return (
        <>
            <h1>Pokemon Information</h1>
            <hr/>
            {isLoading && <p>Loading...</p>}
            <h2>{data?.name}</h2>
        </>
    )
}
