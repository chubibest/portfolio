import React from 'react';
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../../Button'

const Navigation = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const options  = ['About', 'Experience', 'Contributions', 'Contact']

const Index = () => {
    return (
        <Navigation>
            {
                options.map((text, index) => {
                    return (
                        <NavigationItem text={text} key={index} />
                    )
                })
            }
            <NavigationItem>
                <Button text='Resume'/>
            </NavigationItem>
        </Navigation>
    );
};

export default Index;


