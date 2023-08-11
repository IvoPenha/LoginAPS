import { createContext, useState } from 'react'
import { User } from '../types'

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
}
type props = {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: props ) {
  const [user, setUser] = useState<User | null>(null)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ user, setUser,isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  )
}