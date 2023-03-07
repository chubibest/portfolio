import React from 'react';
import styled from 'styled-components'

const NavigationItem = styled.a({
    marginLeft: '2vw',
    fontStretch: 'condensed'
})

interface NavigationItemProps {
    text?: string
    children?: JSX.Element
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Index = ({ text, children, onClick }: NavigationItemProps) => {
    return (
        <NavigationItem onClick={onClick}>
            { children || text }
        </NavigationItem>
    );
};

export default Index;
