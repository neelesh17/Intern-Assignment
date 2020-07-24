import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';

import {  NavContainer, LogoContainer, Text, TextContainer } from './nav.styles';

const Navbar = () => (
    <NavContainer>
        <LogoContainer >
            <Logo className="logo" />
        </LogoContainer>
        <TextContainer>
            <Text>ABC PRIVATE LMT</Text>
        </TextContainer>
    </NavContainer>
);

export default Navbar;