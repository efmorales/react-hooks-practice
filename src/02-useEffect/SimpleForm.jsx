import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'zana',
        email: 'enzo@google.com'
    })

    const { username, email } = formState;

    const onInputchange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });

    }

    
    useEffect(() => {
        // console.log('Hey');
    } , []);

    useEffect(() => {
        // console.log('formState changed');
    } , [formState]);

    useEffect(() => {
        // console.log('email changed');
    } , [email]);

  return (
    <>
        <h1>useEffect</h1>
        <hr />
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputchange}
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="enzo@gmail.com"
            name="email"
            value={email}
            onChange={onInputchange}
        />

        { (username === 'zana2') && <Message />}
    </>
  )
}
