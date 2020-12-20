import React from 'react';
import {Redirect, Route} from "react-router-dom";


function ProtectedRoute({component: Component, ...rest}) {

    localStorage.setItem('isLoggedIn', 'false');

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoggedIn) {
                    return <Component/>
                } else {
                    return (
                        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
                    )
                }
            }}
        />
    );
}

export default ProtectedRoute;