import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div({
    textAlign: 'left',
    position: 'relative',
    display: 'flex',
    width: '80vw',
    top: '12vh',
    margin: '0 auto'
})

interface Props {
    children: JSX.Element
}

const Index = ({ children }: Props) => {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
};

export default Index;