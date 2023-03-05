import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Intro = styled.div({
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'center',
    p: {
        margin: 0
    },
    lineHeight: 1.5
})
// CHANGE FONT WEIGHT ON INTRODUCTIONGIT
const Index = () => {
    return (
        <Intro>
            <p className='fontSmall'>
              Hello 👋, I am 
            </p>
            <p className='fontMedium'>
                Chubi Best.
            </p>
            <p className='fontMedium'>
                Software Engineer
            </p>
            <p className='fontSmall'>
                who specialises in leveraging cutting edge technology to build things that make people happy!
            </p>
            <Button className='fontSmall' text='Contact Me'/>
        </Intro>
    );
};

export default Index;