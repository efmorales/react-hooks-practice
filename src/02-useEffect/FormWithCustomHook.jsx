import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {formState, onInputchange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;


  return (
    <>
        <h1>Form with Custom Hook</h1>
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
        <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputchange}
        />

    </>
  )
}
