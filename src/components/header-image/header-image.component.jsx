import React from 'react';

import {ImageContainer, Image} from './header-image.styles';

const HeaderImage = ({source}) => (
    <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80" alt="Someimage"/>
    </ImageContainer>
);

export default HeaderImage;