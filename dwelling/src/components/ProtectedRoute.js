import React from 'react';
import {Redirect, Route} from "react-router-dom";


function ProtectedRoute({component: Component, access, ...rest}) {

    if (access) {
        return (
            <Route {...rest} component={Component}/>
        );
    } else {
        return (
            <Redirect to="/login"/>
        );
    }
};

export default ProtectedRoute;