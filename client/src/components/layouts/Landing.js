import React from 'react';
import Snowfall from 'react-snowfall';
import Posters from '../posters/Posters';

const Landing = () => {
    return (
        <div>
            <div className="snow">
                <Snowfall snowflakeCount={50} color="white" />
                <div className="snow-text">
                    <h1>
                        Posters of Vancouver
                    </h1>
                </div>
            </div>
            <Posters />
        </div>
    );
};

export default Landing;
