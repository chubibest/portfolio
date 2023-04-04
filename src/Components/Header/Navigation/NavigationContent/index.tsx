import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mailTo, about } from '../actions';
import NavigationItem from '../NavigationItem'
import Button from '../../../Button'
import useInitialRender from '../../../../CustomHooks/useInitialRender';

const NavigationContent = styled.div<{ displayNav: boolean; fadeOut?: boolean }>(({theme, displayNav, fadeOut}) => {

return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.fonts.sizes.small,
    'a button': {
        fontSize: theme.fonts.sizes.small,
    },
    '@media (orientation: portrait)': {
        display: displayNav || fadeOut ? 'flex' : 'none',
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
        animation: `${fadeOut ? 'slideOut' : 'slideIn' } .5s 1`,
        '@keyframes slideIn': {
            '0%': {right: '-30vw'},
            '100%': {right: 0}
        },
        '@keyframes slideOut': {
            '0%': {right: '0'},
            '100%': {right: '-35vw'}
        },
        fontSize: theme.fonts.sizes.mobile.medium,
        'a button': {
            marginTop: '1vh',
            fontSize: theme.fonts.sizes.mobile.medium,
        }
    }}
})
interface Props  {
    displayNav?: boolean
}

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]
const Index = ({ displayNav = true }: Props) => {
    const [fadeOut, setFadeOut] = useState(false)
    const initialRender = useInitialRender()

    useEffect(() => {
        if(!initialRender){
            if (!displayNav) {
                setFadeOut(true)
                setTimeout((() => setFadeOut(false)), 500)
            } 
        }
    }, [displayNav, initialRender])

    return (
        <NavigationContent displayNav={displayNav} fadeOut={fadeOut} onClick={(e) => {e.stopPropagation()}}>
        {
            options.map(({text, onClick}, index) => {
                return (
                    <NavigationItem text={text} key={index} onClick={onClick}/>
                )
            })
        }
        <NavigationItem>
            <a href={require('../../../../resume.docx')} download="Resume" target='_blank' rel="noreferrer">
                <Button text='Resume'/>
            </a>
        </NavigationItem>
    </NavigationContent>
    );
};

export default Index;