import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Intro = styled.div({
    
})
const Index = () => {
    return (
        <Intro>
            <p>
                Hello 👋, I am 
            </p>
            <p>
                Chubi Best.
            </p>
            <p>
                Software Engineer
            </p>
            <p>
                who specialises in leveraging something something something to build things that make people happy!
            </p>
            <Button text='Contact Me'/>
        </Intro>
    );
};

export default Index;