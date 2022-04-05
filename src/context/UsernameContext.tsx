import { createContext, ReactNode, useState } from "react";

type ProviderProps = {
    children:ReactNode
}

type Username = {
    username:string|null
    setUsername:React.Dispatch<React.SetStateAction<string|null>>;
}

export const UsernameContext = createContext({} as Username)

export default function ShinyProvider({children}:ProviderProps){
    const [username,setUsername] = useState<string|null>(null)


   return(
       <UsernameContext.Provider value={{username,setUsername}}>
           {children}
       </UsernameContext.Provider>
   )
}