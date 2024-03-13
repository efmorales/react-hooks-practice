import {useState, useMemo} from 'react';
import { useCounter } from '../src/hooks';

const heavyProcess = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahi vamos...');
    }
    return `${iterations} iterations done`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [truth, setTruth] = useState(false);

    const memorizedMemo = useMemo(() => heavyProcess(counter), [counter])

  return (
    <>
        {truth ? 
        <h1>Counter <small> {counter} </small> </h1> : null}
        <hr />
        <h4> {memorizedMemo} </h4>
        <button
            className='btn btn-primary'
            onClick={()=>increment()}
        >
            +1
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={()=>setTruth(!truth)}
        >
            Show/Hide {JSON.stringify(truth)}
        </button>
    </>
  )
}
