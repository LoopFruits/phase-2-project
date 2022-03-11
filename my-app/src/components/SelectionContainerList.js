import React from 'react';
import Favorites from './Favorites';
import Inventory from './Inventory';
import Miscellaneous from './Miscellaneous';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function SelectionContainerList({vinyls}) {

    const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div></div>,
        main: () => <Home />,
    },
    {
        path: "/inventory",
        sidebar: () => <div></div>,
        main: () => <Inventory vinyls={vinyls} />,
    },
    {
        path: "/miscellaneous",
        sidebar: () => <div></div>,
        main: () => <Miscellaneous />,
    },
    {
        path: "/favorites",
        sidebar: () => <div></div>,
        main: () => <Favorites vinyls={vinyls}  />,
    }
    ];

    return (
        <Router>
            <div style={{ display: "flex" }}>
            <div
                style={{
                padding: "25px",
                width: "300x",
                background: "#f0f0f0",
                }}
            >
                <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className='home-link'>
                    <Link to="/">Home</Link>
                </li>
                <li className='fav-link'>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li className='inventory-link'>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li className='misc-link'>
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