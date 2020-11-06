import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosters } from '../../actions/poster';
import Spinner from '../layouts/Spinner';
import '../layouts/layouts.css';

const Posters = ({ getPosters, poster: { posters, loading } }) => {
    useEffect(() => {
        getPosters();
    }, [getPosters]);

    return (
        loading ? <Spinner /> : (
            <div className="posters">
                <div>
                    <h1>Hello</h1>
                </div>
            </div>
        )
    );
};

Posters.propTypes = {
    getPosters: PropTypes.func.isRequired,
    poster: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    poster: state.poster,
});

export default connect(mapStateToProps, { getPosters })(Posters);
