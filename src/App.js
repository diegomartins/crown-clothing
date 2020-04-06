import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact component={HomePage} path="/"></Route>
                <Route component={ShopPage} path="/shop"></Route>
            </Switch>
        </div>
    );
}

export default App;
