import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Item from "../pages/Item";
import Cart from "../pages/Cart";

function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/item" component={Item}/>
            </Switch>
        </Router>
    );
}

export default Routing;