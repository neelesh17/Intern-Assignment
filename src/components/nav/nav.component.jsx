import React from 'react';
import {ReactComponent as Logo} from '../../assets/Logo.svg'

import {  NavContainer, LogoContainer, Text, TextContainer } from './nav.styles';

const Navbar = () => (
    <NavContainer>
        <LogoContainer >
            <Logo />
        </LogoContainer>
        <TextContainer>
            <Text>Random Pictures</Text>
        </TextContainer>
    </NavContainer>
);

export default Navbar;