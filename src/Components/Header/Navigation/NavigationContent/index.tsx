import React from 'react';
import styled from 'styled-components';
import { mailTo, about } from '../actions';
import NavigationItem from '../NavigationItem'
import Button from '../../../Button'

const NavigationContent = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 767px)': {
        'flexDirection': 'column'
    },
    'zIndex': 10
})

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]

const Index = () => {
    return (
        <NavigationContent>
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