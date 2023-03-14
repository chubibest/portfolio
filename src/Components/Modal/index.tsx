import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Modal = styled.div({
    width: '100vw',
    height: '100vh',
    background: 'rgb(0, 0, 0, 0.5)',
    position: 'relative'
})

interface Props {
    display: boolean
    setDisplay: Dispatch<SetStateAction<boolean>>
    children: JSX.Element
}
const Index = ({display, setDisplay, children}: Props) => {
    return (
        display ?
        (<Modal>{children}</Modal>):
        null
    );
};

export default Index;