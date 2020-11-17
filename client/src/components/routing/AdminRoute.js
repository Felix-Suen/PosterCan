import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            auth.isAuthenticated &&
            !auth.loading &&
            auth.user.admin && <Component {...props} />
        }
    />
);

AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
