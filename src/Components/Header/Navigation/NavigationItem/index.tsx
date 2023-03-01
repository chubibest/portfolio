import React from 'react';
import styled from 'styled-components'

const NavigationItem = styled.div({
    marginLeft: '2vw'
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
