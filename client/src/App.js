import './App.css';
import React, { useEffect } from 'react';
import Navibar from './components/layouts/Navibar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import img from './img/webcropped.jpg';
// Redux
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [loadUser]);

    return (
        <Provider store={store}>
            <Router>
                <div
                    style={{
                        backgroundImage: `url(${img})`,
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
