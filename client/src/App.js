import './App.css';
import React from 'react';
import Navibar from './components/layouts/Navibar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div
                    style={{
                        backgroundImage: `url(https://wallpapercave.com/wp/wp5121842.jpg)`,
                    }}
                >
                    <Navibar />
                    <Route exact path="/" component={Landing} />
                    <section>
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </section>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
