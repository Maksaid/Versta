import React from 'react';
import Orders from './Orders';

const Home = () => {
    
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {/* Render the Orders component */}
            <Orders />
        </div>
    );
};

export default Home;