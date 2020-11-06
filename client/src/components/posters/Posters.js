import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosters } from '../../actions/poster';

const Posters = ({ getPosters, poster: { posters, loading } }) => {
    useEffect(() => {
        getPosters();
    }, [getPosters])
    
    return (
        <div>
            
        </div>
    )
}

Posters.propTypes = {
    getPosters: PropTypes.func.isRequired,
    poster: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    poster: state.poster
});

export default connect(mapStateToProps, { getPosters })(Posters);
