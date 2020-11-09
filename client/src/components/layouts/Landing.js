import React from 'react';
import Snowfall from 'react-snowfall';
import Posters from '../posters/Posters';
import './layouts.css';

const Landing = () => {
    return (
        <div>
            <div className="snow">
                <Snowfall snowflakeCount={100} color="#ffebeb" />
                <div className="snow-text">
                    <h1>Posters of Vancouver</h1>
                    <p>Notice the Overlooked</p>
                    <div class="box">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <Posters />
        </div>
    );
};

export default Landing;
