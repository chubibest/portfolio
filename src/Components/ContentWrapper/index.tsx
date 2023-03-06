import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div({
    textAlign: 'left',
    // position: 'relative',
    // top: '12vh',
    flexDirection: 'column',
    gap: '30vh',
    display: 'flex',
    width: '80vw',
    margin: '12vh auto',
    // marginTop: "12vh"
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