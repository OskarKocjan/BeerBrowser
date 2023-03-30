import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledMainContentContainer, StyledMiddleContainer } from "./styled";
import { HomeProps } from "models/HomeModels";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BeerPreviewCard from "components/BeerPreviewCard";

const apiUrl = "https://api.punkapi.com/v2/beers?";
const Home: React.FC<HomeProps> = () => {
    const [beerData, setBeerData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchBarValue, setSearchBarValue] = useState("");
    const [displayedBeers, setDisplayedBeers] = useState<any[]>([]);

    const fetchData = async (prompt: string) => {
        try {
            const response = await axios.get(apiUrl + prompt);
            setBeerData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData(`page=1&per_page=${12 * 5}`);
    }, []);

    useEffect(() => {
        const tmpBeersToDisplay = beerData.slice(
            12 * (pageNumber - 1),
            12 * pageNumber,
        );
        setDisplayedBeers(tmpBeersToDisplay);
    }, [pageNumber, beerData]);

    const handleSumbit = () => {
        if (!searchBarValue) return;
        let tmpValue = searchBarValue;
        setSearchBarValue("");
        fetchData(tmpValue);
    };

    console.log(beerData);
    console.log(searchBarValue);

    console.log(beerData.slice(12 * (pageNumber - 1), 12 * pageNumber));

    return (
        <StyledMainContentContainer>
            <div className="search-bar-container">
                <TextField
                    placeholder="Search your beer!"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <button type="submit" onClick={handleSumbit}>
                                <SearchIcon />
                            </button>
                        ),
                    }}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    onKeyDown={(e) => {
                        e.key === "Enter" && handleSumbit();
                    }}
                />
            </div>
            <StyledMiddleContainer>
                <div className="main-left"></div>
                <div className="main-center">
                    {displayedBeers.map((element) => {
                        return (
                            <BeerPreviewCard
                                id={element.id}
                                name={element.name}
                                tagline={element.tagline}
                                imageUrl={element.image_url}
                            ></BeerPreviewCard>
                        );
                    })}
                </div>
                <div className="main-right"></div>
            </StyledMiddleContainer>
            <div className="page-number-container"></div>
        </StyledMainContentContainer>
    );
};

export default Home;
