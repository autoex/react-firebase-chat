import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {CHAT_ROUTE} from "../utils/consts";

const AppRouter = ({userAuth}) => {

    return (
        <div>
            {userAuth ?
            <Switch>
                {privateRoutes.map(el=> <Route key={el.id} path={el.path} component={el.component} exact={true}/>)}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(el=> <Route key={el.id} path={el.path} component={el.component} exact={true}/>)}
                <Redirect to={CHAT_ROUTE} />
            </Switch>}
        </div>
    );
};

export default AppRouter;