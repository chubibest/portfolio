import React from 'react';
import styled, { css } from 'styled-components'

export const NavigationStyles = css({
    marginLeft: '2vw'
})

const NavigationItem = styled.div`
 ${NavigationStyles}}
`

interface NavigationItemProps {
    text : string
}

const Index = ({ text }: NavigationItemProps) => {
    return (
        <NavigationItem>
            { text }
        </NavigationItem>
    );
};

export default Index;