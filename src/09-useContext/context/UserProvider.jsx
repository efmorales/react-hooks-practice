import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 1,
//     name: "Enzo Morales",
//     email: "enzomc@gmail.com"
// }


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    return (
        // <UserContext.Provider value={{user}}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
