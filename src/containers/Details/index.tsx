import { DetailsProps } from "models/DetailsModels";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
    StyledMainDetailsContainer,
    StyledLeftDetailsContainer,
    StyledRightDetailsContainer,
} from "./styled";

const apiUrl = "https://api.punkapi.com/v2/beers?";

const getBeerId = (path: string) => {
    return path.split("/").slice(-1)[0] as string;
};

const Details: React.FC<DetailsProps> = () => {
    const [detailedBeerData, setdetailedBeerData] = useState<any>({});
    const location = useLocation();

    const fetchData = async (prompt: string) => {
        try {
            const response = await axios.get(apiUrl + prompt);
            setdetailedBeerData(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData("ids=" + getBeerId(location.pathname));
    }, [location.pathname]);

    console.log(detailedBeerData);

    return (
        <StyledMainDetailsContainer>
            <StyledLeftDetailsContainer>
                <img src={detailedBeerData.image_url} alt="beer" />
            </StyledLeftDetailsContainer>

            <StyledRightDetailsContainer>
                <span>{detailedBeerData.name}</span>
                <span>{detailedBeerData.tagline}</span>
                <span>{detailedBeerData.description}</span>
                <span>{detailedBeerData.abv}</span>
                <span>{detailedBeerData.ibu}</span>
                {/* <span>{detailedBeerData.ingredients}</span> */}
            </StyledRightDetailsContainer>
        </StyledMainDetailsContainer>
    );
};

export default Details;
