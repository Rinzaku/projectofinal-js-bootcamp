import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../hook/authHook"

export const AuthButton = () => {
  const history = useHistory()
  const auth = useAuth()
  return auth.user
    ? <button onClick={
      () => { auth.signout(() => history.push('/')) }
    }>Sign out</button>
    : <Link to='/login'>Sign in</Link>
}