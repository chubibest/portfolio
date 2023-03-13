import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../../Button'
import { mailTo, about } from './actions';
import { WindowSize } from '../../../Context/windowSize';
import Hamburger from './MobileHamburger'

const Navigation = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
})

// const options  = ['About', 'Experience', 'Contributions', 'Contact']
const options  = [{text: 'About', onClick: about}, {text: 'Contact', onClick: mailTo}]

const Index = () => {
    const isMobile = useContext(WindowSize)
    const [displayHam, setDisplayHam] = useState(true) 


    return (
        isMobile && displayHam ?
            <div onClick={() => { setDisplayHam(false)}}>
                <Hamburger />
            </div>
            :
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


