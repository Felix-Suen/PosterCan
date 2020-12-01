import './App.css';
import React, { useEffect } from 'react';
import Navibar from './components/layouts/Navibar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import AdminRoute from './components/routing/AdminRoute';
import PrivateRoute from './components/routing/PrivateRoute';
import Poster from './components/posters/Poster';
import PosterForm from './components/posters/PosterForm';
import EditPoster from './components/posters/EditPoster';
// Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div className="background">
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
                            <Route exact path="/posters/:id" component={Poster} />
                            <AdminRoute exact path="/add" component={PosterForm} />
                            <AdminRoute exact path="/edit/:id" component={EditPoster} />
                        </Switch>
                    </section>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
