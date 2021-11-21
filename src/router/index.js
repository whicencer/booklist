import Main from "../pages/Main";
import addBook from "../pages/addBook";
import readBooks from "../pages/readBooks";
import AuthPage from "../pages/AuthPage";

export const publicRoutes = [
    {
<<<<<<< HEAD
        path: 'booklist/login',
=======
        path: '/booklist/login',
>>>>>>> main
        component: AuthPage,
        exact: false
    },
    {
<<<<<<< HEAD
        path: 'booklist/register',
=======
        path: '/booklist/register',
>>>>>>> main
        component: AuthPage,
        exact: false
    },
]

export const privateRoutes = [
    {
<<<<<<< HEAD
        path: 'booklist/', 
=======
        path: '/booklist', 
>>>>>>> main
        component: Main,
        exact: true
    },
    {
<<<<<<< HEAD
        path: 'booklist/add-book',
=======
        path: '/booklist/add-book',
>>>>>>> main
        component: addBook,
        exact: false
    },
    {
<<<<<<< HEAD
        path: 'booklist/read-books',
=======
        path: '/booklist/read-books',
>>>>>>> main
        component: readBooks,
        exact: false
    },
]