import { Connection } from "typeorm";
import { AuthAPI } from "../controller/AuthAPI";
import { UserAPI } from "../controller/UserAPI";
import { PostAPI } from "../controller/PostAPI"
import { AuthorAPI } from "../controller/AuthorAPI";
import { CategoryAPI } from "../controller/CategoryAPI";
import { getDBConnection } from "../db";


let connection: Connection;
let userAPI: UserAPI;
let postAPI: PostAPI;
let authorAPI: AuthorAPI;
let categoryAPI: CategoryAPI
let authAPI: AuthAPI;

getDBConnection().then(conn => {
    connection = conn
    userAPI = new UserAPI(connection);
    postAPI = new PostAPI(connection);
    authorAPI = new AuthorAPI(connection);
    categoryAPI = new CategoryAPI(connection);
    authAPI = new AuthAPI(connection);
})

export const resolvers = {
    Query: {
        login: (_, { email, password }) => authAPI.getToken({ email, password }),
        users: (_, __, { token }) => authAPI.verifyToken(token)
            && userAPI.getUsers(),
        user: (_, { id }, { token }) => authAPI.verifyToken(token)
            && userAPI.getUser(id),
        post: (_, { id }, { token }) => authAPI.verifyToken(token)
            && postAPI.getPost(id),
        posts: (_, __, { token }) => authAPI.verifyToken(token)
        && postAPI.getPosts(),
        author: (_,{ id }, { token }) => authAPI.verifyToken(token)
        && authorAPI.getAuthor(id),
        authors: (_,__,{ token }) => authAPI.verifyToken(token)
        && authorAPI.getAuthors(),
        category: (_,{ id }, { token }) => authAPI.verifyToken(token)
        && categoryAPI.getCategory(id),
        categories: (_,__,{ token }) => authAPI.verifyToken(token)
        && categoryAPI.getCategories(),
    },
    Mutation: {
        saveUser: (_, { input }) => userAPI.saveUser({ ...input }),
        updateUser: (_, { id, input }, { token }) => authAPI.verifyToken(token)
            && userAPI.updateUser({ id, ...input }),
        // deleteUser: (_, { id }, { token }) => authAPI.verifyToken(token)
        //     && userAPI.deleteUser(id),
        savePost: (_, { input }) => postAPI.savePost({ ...input }),
        updatePost: (_, { id, input }, { token }) => authAPI.verifyToken(token)
            && postAPI.updatePost({ id, ...input }),
        deletePost: (_, { id }, { token }) => authAPI.verifyToken(token)
            && postAPI.deletePost(id),
        saveAuthor: (_, { input }) => authorAPI.saveAuthor({ ...input }),
        saveCategory: (_, { input }) => categoryAPI.saveCategory({ ...input }),
    },
};