import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Homepage from "../pages/Homepage/Index";
import SignUp from "../pages/SignUp/Index";
import SignIn from "../pages/SignIn/Index";
import Product from "../pages/Product/Index";
import Cart from "../pages/Cart/Index";
import Manager from "../pages/Manager/Index";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Homepage} path="/" exact />
                <Route component={SignUp} path="/signup" />
                <Route component={SignIn} path="/signin" />
                <Route component={Product} path="/product/:id" />
                <Route component={Cart} path="/cart" />
                <Route component={Manager} path="/manager" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes