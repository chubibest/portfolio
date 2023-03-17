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
    padding: '1rem 2rem',
    borderRadius: '4px',
    
    '@media (max-width: 767px)': {

        fontSize: theme.fonts.medium
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

