import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
        <p>Loading</p>
    </SpinnerOverlay>
);

export default Spinner;