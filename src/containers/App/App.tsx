import React from "react";
import routesData from "utils/routesData";
import { Routes } from "react-router";
import { Route } from "react-router";
import Navbar from "components/Navbar";
import { ImageHolder } from "./styled";
import AgeConfirmation from "components/AgeConfirmation";

const App = () => {
    return (
        <div className="App">
            <ImageHolder />
            <Navbar />
            <AgeConfirmation />
            <Routes>
                {routesData.map((element) => {
                    return <Route {...element}></Route>;
                })}
            </Routes>
        </div>
    );
};

export default App;
