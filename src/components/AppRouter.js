import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {CHAT_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
const {auth} = useContext(Context);
const [user] = useAuthState(auth);
console.log(auth);
    return (
        <div>
            {user ?
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