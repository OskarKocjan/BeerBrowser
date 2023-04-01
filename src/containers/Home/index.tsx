import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledMainContentContainer, StyledMiddleContainer } from "./styled";
import { HomeProps } from "models/HomeModels";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BeerPreviewCard from "components/BeerPreviewCard";
import LoadingSpin from "components/LoadingSpin";
import Pagination from "components/Pagination";
import { getMoreBeerDataPage } from "utils/helpingFunctions";
import UndoIcon from "@mui/icons-material/Undo";

const pagesPerRequest = 5;
const beersPerPage = 12;
const maxBeersPerRequest = 80;
//API provides only 80 beers per request so pagesPerRequest*beersPerPage must be < 80

const apiUrl = "https://api.punkapi.com/v2/beers?";
const Home: React.FC<HomeProps> = () => {
    const [beerData, setBeerData] = useState<any[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchBarValue, setSearchBarValue] = useState("");
    const [displayedBeers, setDisplayedBeers] = useState<any[]>([]);

    const fetchData = async (prompt: string, update: boolean) => {
        try {
            const response = await axios.get(apiUrl + prompt);
            update
                ? setBeerData([...beerData, ...response.data])
                : setBeerData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // setTimeout(
        //     () =>
        //         fetchData(
        //             `page=1&per_page=${beersPerPage * pagesPerRequest}`,
        //             false,
        //         ),
        //     3000,
        // ); // to test if Loading icon is working
        fetchData(`page=1&per_page=${beersPerPage * pagesPerRequest}`, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (getMoreBeerDataPage(pageNumber, beersPerPage, beerData.length)) {
            fetchData(
                `page=${Math.ceil(
                    (pageNumber + 1) / pagesPerRequest,
                )}&per_page=${beersPerPage * pagesPerRequest}`,
                true,
            );
        }

        const tmpBeersToDisplay = beerData.slice(
            beersPerPage * (pageNumber - 1),
            beersPerPage * pageNumber,
        );
        setDisplayedBeers(tmpBeersToDisplay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, beerData]);

    const handleSumbit = () => {
        if (!searchBarValue) return;
        setBeerData([]);
        setPageNumber(1);
        let tmpValue = searchBarValue;
        setSearchBarValue("");
        setTimeout(() => {
            fetchData("beer_name=" + tmpValue, false);
        }, 1000);
    };

    if (pagesPerRequest * beersPerPage > maxBeersPerRequest)
        return (
            <>
                API provides only {maxBeersPerRequest} beers per request so
                pagesPerRequest*beersPerPage must be &lt; 80
            </>
        );

    return (
        <StyledMainContentContainer>
            <div className="search-bar-container">
                <Button
                    className="go-back-button"
                    onClick={() => {
                        fetchData(
                            `page=1&per_page=${beersPerPage * pagesPerRequest}`,
                            false,
                        );
                        setPageNumber(1);
                    }}
                >
                    <UndoIcon />
                </Button>
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

            <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                numberOfBeersOnPage={displayedBeers.length}
            />
            {beerData.length === 0 && <LoadingSpin />}
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
                                key={element.id}
                            ></BeerPreviewCard>
                        );
                    })}
                </div>
                <div className="main-right"></div>
            </StyledMiddleContainer>
            <div className="page-number-container">
                <Pagination
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    numberOfBeersOnPage={displayedBeers.length}
                />
            </div>
        </StyledMainContentContainer>
    );
};

export default Home;
