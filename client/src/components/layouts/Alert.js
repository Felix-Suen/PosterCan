import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert as BootAlert} from 'react-bootstrap';

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
        <BootAlert key={alert.id} variant={alert.alertType}>
            {alert.msg}
        </BootAlert>
    ));

Alert.propTypes = {
    alert: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
