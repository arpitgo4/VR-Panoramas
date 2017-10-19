import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GalleryUI from '../../presentationals/Gallery/GalleryUI';
import LoaderUI from '../../presentationals/Loader/LoaderUI.component';

import { fetchGallery } from '../../../action-creators/panorama.actionCreator';

class Gallery extends Component {

    render() {
        const { gallery, is_loading } = this.props;

        return (
            is_loading ? <LoaderUI /> : <GalleryUI gallery={gallery}/>
        );
    }

    componentDidMount() {
        this.props.fetchGallery();
    }
    
}

const mapStateToProps = ({ gallery, misc }) => {
    const { is_loading } = misc;
    return {
        gallery,
        is_loading
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchGallery
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);