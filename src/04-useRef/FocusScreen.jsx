import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        console.log(inputRef.current.select())
        inputRef.current.select()
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Your name"
        />

        <button className="btn btn-outline-primary mt-5"
        onClick={onClick}>
            Set focus
        </button>
    </>
  )
}
