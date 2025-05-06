import React, {useContext} from 'react';
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import {INTERFACE_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    const {user} = useContext(Context);

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({path,Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            <Route path="*" element={<Navigate to={INTERFACE_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;