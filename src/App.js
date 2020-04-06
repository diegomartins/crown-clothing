import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";
import Header from "./components/header/header.component";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact component={HomePage} path="/"></Route>
                <Route component={ShopPage} path="/shop"></Route>
            </Switch>
        </div>
    );
}

export default App;
