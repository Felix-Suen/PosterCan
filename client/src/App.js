import './App.css';
import React, { Fragment } from 'react';
import Navibar from './components/layouts/Navibar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Navibar />
                <Route exact path='/' component={Landing} />
                <section className="container">
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App;
