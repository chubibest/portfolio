import React from 'react';
import styled from 'styled-components';
import { mailTo, about } from '../actions';
import NavigationItem from '../NavigationItem'
import Button from '../../../Button'

const NavigationContent = styled.div<{ displayNav: boolean }>(({theme, displayNav}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.fonts.sizes.small,
    'a button': {
        fontSize: theme.fonts.sizes.small,
    },
    '@media (orientation: portrait)': {
        display: displayNav ? 'flex' : 'none',
        'height': '100vh',
        width: 'fit-content',
        'position': 'absolute',
        'top': 0,
        'flexDirection': 'column',
        'paddingTop': '18vh',
        'justifyContent': 'flex-start',
        'right': 0,
        background: '#0e0e0e',
        'margin-left': 'auto',
        'lineHeight': '3',
        'paddingRight': '1vw',
        'zIndex': 4,
        // fontSize: '18px',
        fontSize: theme.fonts.sizes.mobile.medium,
        'a button': {
            marginTop: '1vh',
            fontSize: theme.fonts.sizes.mobile.medium,
        }
    },
}))
interface Props  {
    displayNav?: boolean
}

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]
const Index = ({ displayNav = true }: Props) => {
    return (
        <NavigationContent displayNav={displayNav} onClick={(e) => {e.stopPropagation()}}>
        {
            options.map(({text, onClick}, index) => {
                return (
                    <NavigationItem text={text} key={index} onClick={onClick}/>
                )
            })
        }
        <NavigationItem>
            <a href={require('../../../../resume.pdf')} download="Resume" target='_blank' rel="noreferrer">
                <Button text='Resume'/>
            </a>
        </NavigationItem>
    </NavigationContent>
    );
};

export default Index;