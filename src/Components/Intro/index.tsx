import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Intro = styled.div(({ theme }) => ({
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'center',
    p: {
        margin: 0
    },
    lineHeight: 1.5,
    '.greeting': {
        color: theme.colors.lively
    },
    '.intro': {
        color: theme.colors.normal,
        fontWeight: 900,
        span: {
            color: theme.colors.normal
        }
    },
}))

const Index = () => {
    return (
        <Intro>
            <p className='fontSmall greeting'>
              Hello, I am 
              {/* Hello 👋, I am  */}
            </p>

            <p className='fontLarge intro'>
                <span>
                    Chubi Best.
                </span>
                <br/>
                Software Engineer
            </p>

            <p className='fontSmall third'>
                I specialize in leveraging cutting edge technology(s?) to build things that make people happy!
            </p>
            <Button className='fontSmall btn-margin-top' text='Contact Me'/>
        </Intro>
    );
};

export default Index;