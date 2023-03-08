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
        color: theme.colors.lively
    },
    '.intro': {
        color: theme.colors.boldPink,
        fontWeight: 900,
        span: {
            color: theme.colors.lightPink
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
                I specialize in leveraging cutting edge technology to build things that make people happy!
            </p>
            <Button className='fontSmall btn-margin-top' text='Contact Me' onClick={mailTo}/>
        </Intro>
    );
};
// onClick?: (e: React.MouseEvent<HTMLElement>) => void

export default Index;