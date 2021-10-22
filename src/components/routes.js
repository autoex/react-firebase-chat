import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: Chat,
        id: CHAT_ROUTE
    }
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login,
        id: LOGIN_ROUTE
    }
];