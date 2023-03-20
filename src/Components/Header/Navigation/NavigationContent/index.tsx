import React from 'react';
import styled from 'styled-components';
import { mailTo, about } from '../actions';
import NavigationItem from '../NavigationItem'
import Button from '../../../Button'

const NavigationContent = styled.div(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (orientation: portrait)': {
        'flexDirection': 'column',
        'paddingTop': '18vh',
        'justifyContent': 'flex-start',
        'position': 'relative',
        'right': 0,
        background: '#0e0e0e',
        'margin-left': 'auto',
        'lineHeight': '3',
        'paddingRight': '1vw',
        'zIndex': 4,
        fontSize: '18px',
        'a button': {
            marginTop: '1vh',
            fontSize: '20px',

        }
    },
}))

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]

const Index = () => {
    return (
        <NavigationContent onClick={(e) => {e.stopPropagation()}}>
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