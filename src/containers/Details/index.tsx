import { DetailsProps } from "models/DetailsModels";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoadingSpin from "components/LoadingSpin";
import { objToArray, getNames } from "utils/helpingFunctions";
import {
    StyledMainDetailsContainer,
    StyledLeftDetailsContainer,
    StyledRightDetailsContainer,
    StyledIngredientsContainer,
} from "./styled";

const apiUrl = "https://api.punkapi.com/v2/beers?";

const getBeerId = (path: string) => {
    const checkIfNumber = path.split("/").slice(-1)[0];
    if (!+checkIfNumber) return "1";
    return Math.floor(+checkIfNumber).toString();
};

const Details: React.FC<DetailsProps> = () => {
    const [detailedBeerData, setDetailedBeerData] = useState<any>({});
    const location = useLocation();

    const fetchData = async (prompt: string) => {
        try {
            const response = await axios.get(apiUrl + prompt);
            setDetailedBeerData(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // setTimeout(
        //     () => fetchData("ids=" + getBeerId(location.pathname)),
        //     3000,
        // ); // to test if Loading icon is //working
        fetchData("ids=" + getBeerId(location.pathname));
    }, [location.pathname]);

    console.log(detailedBeerData);
    console.log(objToArray(detailedBeerData.ingredients));

    return (
        <StyledMainDetailsContainer>
            <StyledLeftDetailsContainer>
                {!detailedBeerData.image_url ? (
                    <LoadingSpin />
                ) : (
                    <img src={detailedBeerData.image_url} alt="beer" />
                )}
            </StyledLeftDetailsContainer>
            <StyledRightDetailsContainer>
                {!detailedBeerData.image_url ? (
                    <LoadingSpin />
                ) : (
                    <>
                        <div>
                            <span>Name: </span>
                            {detailedBeerData.name}
                        </div>
                        <div>
                            <span>Tag: </span>
                            {detailedBeerData.tagline}
                        </div>
                        <div>
                            <span>Description: </span>
                            {detailedBeerData.description}
                        </div>
                        <div>
                            <span>Abv: </span>
                            {detailedBeerData.abv}%
                        </div>
                        <div>
                            <span>Ibu: </span>
                            {detailedBeerData.ibu}
                        </div>
                        <div>
                            <span>Ingredients: </span>
                        </div>
                        <StyledIngredientsContainer>
                            <div className="ingredient-list-container">
                                Hops
                                <ul>
                                    {getNames(
                                        detailedBeerData.ingredients.hops,
                                    ).map((element: string, index: number) => {
                                        return <li key={index}>{element}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className="ingredient-list-container">
                                Malt
                                <ul>
                                    {getNames(
                                        detailedBeerData.ingredients.malt,
                                    ).map((element: string, index: number) => {
                                        return <li key={index}>{element}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className="ingredient-list-container">
                                Yeast
                                <ul>
                                    <li>
                                        {detailedBeerData.ingredients.yeast}
                                    </li>
                                </ul>
                            </div>
                        </StyledIngredientsContainer>
                    </>
                )}
            </StyledRightDetailsContainer>
        </StyledMainDetailsContainer>
    );
};

export default Details;
