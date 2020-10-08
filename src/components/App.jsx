import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import routes from '../config/routes';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/news/12345">Article</Link>
                    </li>
                </ul>
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
