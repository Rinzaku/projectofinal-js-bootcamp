import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { About } from "../page/About";
import { DeletePost } from "../page/DeletePost";
import { Home } from "../page/Home";
import { LoginPage } from "../page/LoginPage";
import { NewPost } from "../page/NewPost";
import { Post } from "../page/Post";
import { Posts } from "../page/Posts";
import { ProtectedPage } from "../page/ProtectedPage";
import { PublicPage } from "../page/PublicPage.jsx";
import { UpdatePost } from "../page/UpdatePost";
import { Users } from "../page/Users";
export const Routes = () => {
  return (
    <Switch>
      <Route path="/public"><PublicPage /></Route>
      <Route path="/login"><LoginPage /></Route>
      <PrivateRoute path="/protected"><ProtectedPage /></PrivateRoute>
      <Route path="/about"><About /></Route>
      <Route path="/users"><Users /></Route>
      <Route path="/posts"><Posts /></Route>
      <Route path="/post"><Post /></Route>
      <Route path="/newPost"><NewPost /></Route>
      <Route path="/updatePost"><UpdatePost /></Route>
      <Route path="/deletePost"><DeletePost /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  )
}
