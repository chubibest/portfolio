import React, { useContext, useState } from 'react';
import { WindowSize } from '../../../Context/windowSize';
import Hamburger from './MobileActions'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'

const Index = () => {
    const isMobile = useContext(WindowSize)
    const [displayModal, setDisplayModal] = useState(false) 


    return (
        <>
            {displayModal ? <Modal> <NavigationContent />  </Modal>: null}
            {isMobile ? <Hamburger displayModal={displayModal} setDisplayModal={setDisplayModal}/> : <NavigationContent />}
        </>
    );
};

export default Index;


