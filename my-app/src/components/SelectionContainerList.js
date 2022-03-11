import React from 'react';
import Favorites from './Favorites';
import Inventory from './Inventory';
import Miscellaneous from './Miscellaneous';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function SelectionContainerList({vinyls}) {

    const routes = [
        {
            path: "/",
            exact: true,
            sidebar: () => <div>home!</div>,
            main: () => <h2>Home</h2>,
        },
        {
            path: "/inventory",
            sidebar: () => <div>inventory!</div>,
            main: () => <Inventory vinyls={vinyls} />,
        },
        {
            path: "/miscellaneous",
            sidebar: () => <div>miscellaneous!</div>,
            main: () => <Miscellaneous />,
        },
        {
            path: "/favorites",
            sidebar: () => <div>favorites!</div>,
            main: () => <Favorites vinyls={vinyls}  />,
        }
    ];

return (
    <Router>
        <div style={{ display: "flex" }}>
        <div
            style={{
            padding: "10px",
            width: "200px",
            background: "#f0f0f0"
            }}
        >
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            <li>
                <Link to="/inventory">Inventory</Link>
            </li>
            <li>
                <Link to="/miscellaneous">Miscellaneous</Link>
            </li>
            </ul>

            <Switch>
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
                />
            ))}
            </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
                />
            ))}
            </Switch>
        </div>
        </div>
    </Router>
    );
}

export default SelectionContainerList;