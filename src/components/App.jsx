import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import routes from '../config/routes';
import Navigation from './modules/Navigation';

import '../css/normalize.css';
import '../css/main';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                {
                    routes.map((route, i) => (
                        <Route key={route.key} path={route.path} component={route.component} exact={route.isExact} />
                    ))
                }
                </Switch>
            </div>
        </Router>
    );
}

export default App;
