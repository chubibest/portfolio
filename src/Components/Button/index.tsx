import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string
    className?: string
}
const Button = styled.button(({theme}) => ({
    color: theme.button,
    'background-color': 'transparent',
    outline: 'None',
    cursor: 'pointer',
    border: `1px solid ${theme.button}`,
    width: 'fit-content',
    padding: '1rem 2rem',
    borderRadius: '4px',
}))

const Index = ({ text, className }: ButtonProps) => {
    return (
        <Button className={className}>
            {text}
        </Button>
    );
};

export default Index;  

