import React from 'react';
import styled from 'styled-components'

const NavigationItem = styled.a({
    marginLeft: '2vw',
    // transform: 'scaleX(1.2) scaleY(.8)'
    // transform: 'scaleX(1.2) scaleY(.8)'
    // transform: 'scaleX(1.1)'
    fontStretch: 'condensed'
})

interface NavigationItemProps {
    text?: string
    children?: JSX.Element
}

const Index = ({ text, children }: NavigationItemProps) => {
    return (
        <NavigationItem>
            { children || text }
        </NavigationItem>
    );
};

export default Index;
