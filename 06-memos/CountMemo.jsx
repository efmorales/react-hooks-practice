import {memo} from 'react';

export const CountMemo = memo (({counter}) => {
  console.log('component rendered')
  return (
    <small> {counter} </small>
  )
})
