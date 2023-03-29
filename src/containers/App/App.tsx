import React from 'react';
import Home from 'containers/Home';
import routesData from 'utils/routesData';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Navbar from 'components/Navbar';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                {routesData.map((element) => {
                    return <Route {...element}></Route>;
                })}
            </Routes>
        </div>
    );
};

export default App;
