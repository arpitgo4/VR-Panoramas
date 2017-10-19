import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss';

const GalleryUI = ({
    gallery
}) => (
    <div styleName="gallery-wrapper">
        {gallery.map(image => (
            <div styleName="image-wrapper">
                <img src={image.pano} />
                <p>{image.name}</p>
            </div>
        ))}
    </div>
);

export default CSSModules(GalleryUI, styles);