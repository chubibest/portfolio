import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div({
    textAlign: 'left',
    position: 'relative',
    left: '17vw',
    top: '12vh'
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