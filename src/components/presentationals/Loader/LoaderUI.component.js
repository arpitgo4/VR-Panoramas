import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss';

const LoaderUI = ({

}) => (
    <div styleName="loader-wrapper">
        <div styleName="loader"></div>
    </div>
);

export default CSSModules(LoaderUI, styles);