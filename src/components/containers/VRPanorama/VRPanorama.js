import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import VRPanoramaUI from '../../presentationals/VRPanorama/VRPanoramaUI';

class VRPanorama extends Component {

    render() {
        const pano = this.props.pano;

        return <VRPanoramaUI />;
    }
}

const mapStateToProps = ({ gallery }, { params }) => {
    let pano = null;
    if(params.name)
        pano = gallery.find(image => image.name === params.name);

    return {
        pano
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VRPanorama));