import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import AFrame from 'aframe';

import VRPanoramaUI from '../../presentationals/VRPanorama/VRPanoramaUI';
import LoaderUI from '../../presentationals/Loader/LoaderUI.component';

import { fetchGallery, gotoGallery } from '../../../action-creators/panorama.actionCreator';

class VRPanorama extends Component {

    render() {
        const { pano, is_loading } = this.props;

        return is_loading ? <LoaderUI /> : <VRPanoramaUI pano={pano} />;
    }

    componentDidUpdate() {
        this.props.gotoGallery();
    }

    componentDidMount() {
        this.props.fetchGallery();
    }
    
}

const mapStateToProps = ({ gallery, misc }, { params }) => {
    const { is_loading } = misc;
    let pano = null;
    if(params.name)
        pano = gallery.find(image => image.name === params.name);

    return {
        pano,
        is_loading
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchGallery,
        gotoGallery
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VRPanorama));