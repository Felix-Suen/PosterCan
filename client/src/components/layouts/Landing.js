import React from 'react';
import Snowfall from 'react-snowfall';

const Landing = () => {
    return (
        <div className="snow">
            <Snowfall
                snowflakeCount={50}
                color="white"
            />
            <div className="snow-text">
                <h1>Posters of Vancouver</h1>
            </div>
        </div>
    )
};

export default Landing;
