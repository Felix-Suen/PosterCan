import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPoster } from '../../actions/poster';

const PosterForm = props => {
    const [text, setText] = useState('')
    
    return (
        <h1>Hello</h1>
    )
}

PosterForm.propTypes = {
    addPoster: PropTypes.func.isRequired,
}

export default connect(null, { addPoster })(PosterForm)
