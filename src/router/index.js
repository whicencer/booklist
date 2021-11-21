import Main from "../pages/Main";
import addBook from "../pages/addBook";
import readBooks from "../pages/readBooks";
import AuthPage from "../pages/AuthPage";

export const publicRoutes = [
    {
        path: 'booklist/login',
        component: AuthPage,
        exact: false
    },
    {
        path: 'booklist/register',
        component: AuthPage,
        exact: false
    },
]

export const privateRoutes = [
    {
        path: 'booklist/', 
        component: Main,
        exact: true
    },
    {
        path: 'booklist/add-book',
        component: addBook,
        exact: false
    },
    {
        path: 'booklist/read-books',
        component: readBooks,
        exact: false
    },
]