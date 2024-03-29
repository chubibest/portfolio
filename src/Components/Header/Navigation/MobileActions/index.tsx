import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Hamburger = styled.div({
    position: 'absolute',
    right: '2vw',
    cursor: 'pointer',
    width: '15vw',
    zIndex: 5,
    display: 'none',
    '@media (orientation: portrait)': {
        display: 'unset'
    }
})

interface Props {
    setDisplayModal: Dispatch<SetStateAction<boolean>>
    displayModal: boolean
}

const Index =  ({setDisplayModal, displayModal}: Props) => {
    return (
        <Hamburger  onClick={(e) => { setDisplayModal(!displayModal); }}>
            <svg className="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round">
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
            </path>
            <rect  width="10" height="10" stroke="none" onClick={() => [setDisplayModal(true)]}>
                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
            </rect>
            <rect  width="10" height="10" stroke="none">
                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
            </rect>
            </svg>
        </Hamburger>

    );
}
export default Index;