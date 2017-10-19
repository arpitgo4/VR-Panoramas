import React from 'react';
import CSSModules from 'react-css-modules';

import park from '../../../static/park.jpg';

import styles from './style.scss';

console.log(park);

const VRPanoramaUI = ({
    pano
}) => (
    <div>
        <a-scene>
            <a-sky src="https://i.imgur.com/ZVs0vyH.jpg" rotation="0 -130 0"></a-sky>

            <a-text font="kelsonsans" value={pano.name} width="6" position="-2.5 0.25 -1.5"
            rotation="0 15 0"></a-text>
        </a-scene>
    </div>
);

export default CSSModules(VRPanoramaUI, styles);