import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'
import Reload from './Reload'

const Header = styled.div({
 height: '10vh',
 color: 'white',
//  background: 'orangered',
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'center'
})

const Index = () => {
    return (
        <Header>
            <Reload/>
            <Navigation/>
        </Header>
    );
};

export default Index;