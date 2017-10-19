import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss';

const VRPanoramaUI = ({
    pano
}) => (
    <a-scene>
        <a-sky src={pano.pano} rotation="0 -130 0"></a-sky>

        <a-text font="kelsonsans" value={pano.name} width="6" position="-2.5 0.25 -1.5"
        rotation="0 15 0"></a-text>
    </a-scene>
);

export default CSSModules(VRPanoramaUI, styles);