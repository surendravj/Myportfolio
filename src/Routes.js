import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import About from './screens/About';
import Github from './screens/Github';



const Routes = () => {
    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/resume" component={About}></Route>
                <Route exact path="/myrepos" component={Github}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
