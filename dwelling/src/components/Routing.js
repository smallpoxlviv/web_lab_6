import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import {DwellingProvider} from "../context/DwellingContext";


function Routing() {

    return (
        <DwellingProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/catalog:id" component={Item}/>
                    <Route exact path="/cart" component={Cart}/>
                </Switch>
            </Router>
        </DwellingProvider>
    );
}

export default Routing;