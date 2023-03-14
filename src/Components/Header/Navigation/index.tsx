import React, { useContext, useState } from 'react';
import { WindowSize } from '../../../Context/windowSize';
import Hamburger from './MobileHamburger'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'

const Index = () => {
    const isMobile = useContext(WindowSize)
    const [displayModal, setDisplayModal] = useState(false) 


    return (
        <>
            <Modal display={displayModal} setDisplay={setDisplayModal} >
                <NavigationContent />
            </Modal>
            {isMobile ? <Hamburger optionsState={displayModal} flipOptionState={setDisplayModal}/> : <NavigationContent />}
        </>
    );
};

export default Index;


