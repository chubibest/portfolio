import React from 'react';
import styled from 'styled-components'
import NavigationItem, { NavigationStyles } from './NavigationItem'
import Button from '../../Button'

const Navigation = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
})

const DownloadResume = styled(Button)`
    ${NavigationStyles}
`


const J = styled(DownloadResume)
const options  = ['Experience', 'About', 'Contact']

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
            <DownloadResume text={'Resume'}/>
        </Navigation>
    );
};

export default Index;


