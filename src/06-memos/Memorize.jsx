import {useState} from 'react';
import { CountMemo } from './CountMemo';
import { useCounter } from '../src/hooks';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [truth, setTruth] = useState(false);

  return (
    <>
        <h1>Counter <CountMemo counter={counter} /></h1>
        <hr />
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
