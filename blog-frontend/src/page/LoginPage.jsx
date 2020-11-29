import { useAuth } from "../hook/authHook"
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../graphql/queries";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const LoginPage = () => {
  // hook's call
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()
  const [getToken, { loading, error, data }] = useLazyQuery(LOGIN)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { from } = location.state || { from: { pathname: '/' } }

  const loginQuery = () => {
    getToken({
      variables: {
        email,
        password
      }
    })
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data && data.login) {
    auth.signin(() => {
      history.replace(from)
    }, data)
  }

  return (
    <section>
      <h2>LoginPage view</h2>
      <input type="text"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      {/* <button onClick={() => { auth.signin(() => { }) }}>Login</button> */}
      <button onClick={loginQuery}>Login</button>
    </section>
  )
}