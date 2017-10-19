import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import styles from './style.scss';

const GalleryUI = ({
    gallery
}) => (
    <div styleName="gallery-wrapper">
        <div styleName="image-wrapper">
        {gallery.map(image => (
            <Link to={`/${image.name}`}
                key={image.name} styleName="image">
                <img src={image.pano} />
                <p>{image.name}</p>
            </Link>
        ))}
        </div>
    </div>
);

export default CSSModules(GalleryUI, styles);