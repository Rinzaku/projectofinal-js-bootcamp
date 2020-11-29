import { Link } from "react-router-dom"
import { Consumer } from './Consumer';
import { useAuth } from "../hook/authHook"

export const NavbarPost = () => {
  const auth = useAuth()
  return auth.user && (
    <>
      <nav>
        <ul>
          <li><Link to='/newPost'>Agrega Post</Link></li>
          <li><Link to="/posts">Consulta Posts</Link></li>
          <li><Link to="/post">Consulta de Post</Link></li>
          <li><Link to="/updatePost">Actualiza Post</Link></li>
          <li><Link to="/deletePost">Elimina Post</Link></li>
        </ul>
      </nav>
      <Consumer />
    </>
  )
}
