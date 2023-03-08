import React from 'react';
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../../Button'
import { mailTo, about } from './actions';

const Navigation = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
})

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]

const Index = () => {
    return (
        <Navigation>
            {
                options.map(({text, onClick}, index) => {
                    return (
                        <NavigationItem text={text} key={index} onClick={onClick}/>
                    )
                })
            }
            <NavigationItem>
                <a href={require('../../../resume.pdf')} download="Resume" target='_blank' rel="noreferrer">
                    <Button text='Resume'/>
                </a>
            </NavigationItem>
        </Navigation>
    );
};
// download="Resume"
export default Index;


