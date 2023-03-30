import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledMainContentContainer, StyledMiddleContainer } from './styled';
import { HomeProps } from 'models/HomeModels';

const apiUrl = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
const Home: React.FC<HomeProps> = () => {
    const [beerData, setBeerData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(apiUrl);
    //             setBeerData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    console.log(beerData);

    return (
        <StyledMainContentContainer>
            <div className="search-bar-container"></div>
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
