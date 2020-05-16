import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import About from './screens/About';
import Contact from './screens/Contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/resume" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
