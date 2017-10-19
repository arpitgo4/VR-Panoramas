import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GalleryUI from '../../presentationals/Gallery/GalleryUI';

class Gallery extends Component {

    render() {
        return (
            <GalleryUI />
        );
    }
}

const mapStateToProps = ({ }) => {
    return null;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);