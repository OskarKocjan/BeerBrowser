import React from 'react';
import Home from 'containers/Home';
import routesData from 'utils/routesData';
import { Routes } from 'react-router';
import { Route } from 'react-router';

const App = () => {
    return (
        <div className="App">
            <Routes>
                {routesData.map((element) => {
                    return <Route {...element}></Route>;
                })}
            </Routes>
        </div>
    );
};

export default App;
