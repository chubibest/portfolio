import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div({
    textAlign: 'left',
    flexDirection: 'column',
    gap: '30vh',
    display: 'flex',
    width: '80vw',
    margin: '12vh auto',
    marginBottom: '0',
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