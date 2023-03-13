import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { mailTo } from '../Header/Navigation/actions';

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
        color: theme.colors.lively,
        marginBottom: '5vh'
    },
    '.intro': {
        color: theme.colors.boldPink,
        fontWeight: 900,
        'span': {
            color: theme.colors.lightPink,
        },
        '.title': {
            lineHeight: 1,
        },
    },
    '.whatIdo': {
        marginTop: '4vh',
        width: theme.layout.third,
        color: 'white'
    }
}))

const Index = () => {
    return (
        <Intro>
            <p className='fontSmall greeting'>
              Hello, I am 
            </p>

            <p className='fontLarge intro'>
                <span>
                    Chubi Best.
                </span>
                <p className='title'>
                    Software Engineer
                </p>
            </p>

            <p className='fontSmall whatIdo'>
                I specialize in leveraging cutting edge technology to build things that make people happy!
            </p>
            <Button className='fontSmall btn-margin-top' text='Contact Me' onClick={mailTo}/>
        </Intro>
    );
};

export default Index;