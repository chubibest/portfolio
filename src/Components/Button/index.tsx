import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}
const Button = styled.button(({theme}) => ({
    color: theme.button,
    'background-color': 'transparent',
    outline: 'None',
    cursor: 'pointer',
    border: `1px solid ${theme.button}`,
    width: 'fit-content',
    borderRadius: '.5vh',
    padding: '1.5vh 2vw',
    '@media (orientation: portrait)': {
        padding: '2vh 8vw',
    }
}))

const Index = ({ text, className, onClick }: ButtonProps) => {
    return (
        <Button className={className} onClick={onClick}>
            {text}
        </Button>
    );
};

export default Index;  

