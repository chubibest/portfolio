import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import NavigationContent from '../Header/Navigation/NavigationContent';

const Modal = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    background: 'rgb(0, 0, 0, 0.6)',
    'backdrop-filter': 'blur(5px)',
    position: 'absolute',
    top: 0,
    left: 0,
    // 'justifyContent': 'flex-end',
})

interface Props {
    display: boolean
    setDisplay: Dispatch<SetStateAction<boolean>>
    children: JSX.Element
}
const Index = ({display, setDisplay, children}: Props) => {
    return (

        (<Modal> <NavigationContent/> </Modal>)
    );
};

export default Index;