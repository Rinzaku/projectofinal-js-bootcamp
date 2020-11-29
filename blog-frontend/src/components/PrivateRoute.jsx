import { Redirect, Route } from "react-router-dom"
import { useAuth } from "../hook/authHook";

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user || auth.isSigned()
          ? (children)
          : (<Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />)
      }
    />
  )
}
