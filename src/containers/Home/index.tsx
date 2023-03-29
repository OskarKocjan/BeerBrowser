import React from 'react';

interface HomeProps {
    // add any props you want to pass to Home component
}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div>
            <h1>Welcome to the Beer Website!</h1>
        </div>
    );
};

export default Home;
