import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from './index';
import { useAuth } from '../hooks/useAuth'

const Routers = () => {
    const { isAuth } = useAuth()
    return (
        <Switch>
            {
                isAuth
                    ? 
                        privateRoutes.map(el => {
                            return <Route key={el.path} exact={el.exact} path={el.path} component={el.component} />
                        })
                    :
                        publicRoutes.map(el => {
                            return <Route key={el.path} exact={el.exact} path={el.path} component={el.component} />
                        })
            }
<<<<<<< HEAD
            {isAuth ? <Redirect to="booklist/" /> : <Redirect to="booklist/login" />}
=======
            {isAuth ? <Redirect to="/booklist" /> : <Redirect to="/booklist/login" />}
>>>>>>> main
        </Switch>
    )
}

export default Routers