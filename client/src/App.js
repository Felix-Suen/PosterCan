import './App.css';
import React, { Fragment } from 'react';
import Navibar from './components/layouts/Navibar';
import Landing from './components/layouts/Landing';

const App = () => {
    return (
        <Fragment>
            <Navibar />
            <Landing />
        </Fragment>
    )
};

export default App;
