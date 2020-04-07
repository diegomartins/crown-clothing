import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";
import Header from "./components/header/header.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: { id: snapshot.id, ...snapshot.data() }
                    });
                });
            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact component={HomePage} path="/"></Route>
                    <Route component={ShopPage} path="/shop"></Route>
                    <Route
                        component={AuthenticationPage}
                        path="/signIn"
                    ></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
