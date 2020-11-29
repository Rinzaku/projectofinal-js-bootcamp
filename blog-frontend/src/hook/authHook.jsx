import { createContext, useContext, useState } from "react";

const authContext = createContext()

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

const tokenPayload = token => JSON.parse(atob(token.split('.')[1]))

const useProvideAuth = () => {

  const [user, setUser] = useState(null)

  const signin = (cb, data) => {
    const tokeData = tokenPayload(data.login)
    setUser(tokeData.email)
    sessionStorage.setItem('token', data.login)
    cb()
  }
  const signout = cb => {
    setUser(null)
    sessionStorage.removeItem('token')
    cb()
  }
  const isSigned = cb => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const tokeData = tokenPayload(token)
      setUser(tokeData.email)
      return tokeData.email
    }
    return
  }

  return {
    user,
    signin,
    signout,
    isSigned,
  }
}
