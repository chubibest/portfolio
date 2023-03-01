import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string
}
const Button = styled.button(({theme}) => ({
    color: theme.button,
    'background-color': 'transparent',
    outline: 'None',
    cursor: 'pointer',
    border: `1px solid ${theme.button}`,
    height: '6vh',
    width: '6vw',
    borderRadius: '4px',

//     font-size: 1.5em;
    // 'box-shadow': '0 6px 6px rgba(0, 0, 0, 0.6)'
}))

const Index = ({ text }: ButtonProps) => {
    return (
        <Button>
            {text}
        </Button>
    );
};

export default Index;

//     

