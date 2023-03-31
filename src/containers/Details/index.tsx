import { DetailsProps } from "models/DetailsModels";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoadingSpin from "components/LoadingSpin";
import {
    StyledMainDetailsContainer,
    StyledLeftDetailsContainer,
    StyledRightDetailsContainer,
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
                        <span>{detailedBeerData.name}</span>
                        <span>{detailedBeerData.tagline}</span>
                        <span>{detailedBeerData.description}</span>
                        <span>{detailedBeerData.abv}</span>
                        <span>{detailedBeerData.ibu}</span>
                    </>
                )}

                {/* <span>{detailedBeerData.ingredients}</span> */}
            </StyledRightDetailsContainer>
        </StyledMainDetailsContainer>
    );
};

export default Details;
