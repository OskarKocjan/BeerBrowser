import React from "react";
import routesData from "utils/routesData";
import { Routes } from "react-router";
import { Route } from "react-router";
import Navbar from "components/Navbar";
import { ImageHolder, TypeWriter } from "./styled";
import AgeConfirmation from "components/AgeConfirmation";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <ImageHolder className="center-section-row">
                <span>
                    <TypeWriter>Welcome to beer page</TypeWriter>
                </span>
            </ImageHolder>
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
