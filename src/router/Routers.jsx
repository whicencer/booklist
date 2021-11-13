import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from './index';

const Routers = () => {
    return (
        <Switch>
            {
                routes.map(el => {
                    return <Route key={el.path} exact={el.exact} path={el.path} component={el.component} />
                })
            }
            <Redirect to="/" />
        </Switch>
    )
}

export default Routers