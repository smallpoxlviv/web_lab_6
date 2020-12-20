import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";


function Routing() {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <Router>
            <Switch>

                <ProtectedRoute exact path="/" component={Home}/>
                <ProtectedRoute exact path="/catalog" component={Catalog}/>
                <ProtectedRoute exact path="/catalog:id" component={Item}/>
                <ProtectedRoute exact path="/cart" component={Cart}/>


                <Route exact path="/login">
                    {isLoggedIn ? (
                        <Redirect to="/"/>
                    ) : (
                        <Login/>
                    )}
                </Route>

                <Route exact path="/register">
                    {isLoggedIn ? (
                        <Redirect to="/"/>
                    ) : (
                        <Register/>
                    )}
                </Route>

                <Route exact path="*" component={NotFound}/>

            </Switch>
        </Router>
    );
}

export default Routing;