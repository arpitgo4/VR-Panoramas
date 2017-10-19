import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GalleryUI from '../../presentationals/Gallery/GalleryUI';

import { fetchGallery } from '../../../action-creators/panorama.actionCreator';

class Gallery extends Component {

    render() {
        const { gallery } = this.props;

        return (
            <GalleryUI gallery={gallery}/>
        );
    }

    componentDidMount() {
        this.props.fetchGallery();
    }
    
}

const mapStateToProps = ({ gallery }) => {
    return {
        gallery
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchGallery
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);