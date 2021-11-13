import Main from "../pages/Main";
import addBook from "../pages/addBook"
import readBooks from "../pages/readBooks";

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
    }
]