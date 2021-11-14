import Main from "../pages/Main";
import addBook from "../pages/addBook";
import readBooks from "../pages/readBooks";
import AuthPage from "../pages/AuthPage";

export const routes = [
    {
        path: '/', 
        component: Main,
        exact: true
    },
    {
        path: '/add-book',
        component: addBook,
        exact: false
    },
    {
        path: '/read-books',
        component: readBooks,
        exact: false
    },
    {
        path: '/login',
        component: AuthPage,
        exact: false
    },
    {
        path: '/register',
        component: AuthPage,
        exact: false
    },
]