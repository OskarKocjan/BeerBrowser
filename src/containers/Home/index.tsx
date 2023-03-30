import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledMainContentContainer, StyledMiddleContainer } from "./styled";
import { HomeProps } from "models/HomeModels";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const apiUrl = "https://api.punkapi.com/v2/beers?";
const Home: React.FC<HomeProps> = () => {
    const [beerData, setBeerData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchBarValue, setSearchBarValue] = useState("");

    const fetchData = async (prompt: string) => {
        try {
            const response = await axios.get(apiUrl + prompt);
            setBeerData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect(() => {
    //     fetchData("page=2&per_page=80");
    // }, []);

    const handleSumbit = () => {
        if (!searchBarValue) return;
        let tmpValue = searchBarValue;
        setSearchBarValue("");
        fetchData(tmpValue);
    };

    console.log(beerData);
    console.log(searchBarValue);

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
                <div className="main-center"></div>
                <div className="main-right"></div>
            </StyledMiddleContainer>
            <div className="page-number-container"></div>
        </StyledMainContentContainer>
    );
};

export default Home;
