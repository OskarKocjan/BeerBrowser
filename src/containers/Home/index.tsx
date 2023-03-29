import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface HomeProps {
    // add any props you want to pass to Home component
}
const apiUrl = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
const Home: React.FC<HomeProps> = (props) => {
    const [beerData, setBeerData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(apiUrl);
                setBeerData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    console.log(beerData);

    return (
        <div>
            <h1>dsada</h1>
        </div>
    );
};

export default Home;
