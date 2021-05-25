import React from 'react';
import { Container, ButtonText } from './styles';
import {ButtonProps} from 'react-native';

interface ButtonP extends ButtonProps {
    children: string;
}

const Button: React.FC<ButtonP> = ({children, ...rest}) => (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;