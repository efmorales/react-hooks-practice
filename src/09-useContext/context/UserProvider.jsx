import { UserContext } from "./UserContext"

const user = {
    id: 1,
    name: "Enzo Morales",
    email: "enzomc@gmail.com"
}


export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}
