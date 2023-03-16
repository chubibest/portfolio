import React, { useContext, useEffect, useState } from 'react';
import { WindowSize } from '../../../Context/windowSize';
import Hamburger from './MobileActions'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'

const Index = () => {
    const isMobile = useContext(WindowSize)
    const [displayModal, setDisplayModal] = useState(false) 

    useEffect(() => {
        setDisplayModal(false)
    }, [isMobile])

    return (
        <>
            {isMobile && displayModal ? <Modal> <NavigationContent />  </Modal>: null}
            {isMobile ? <Hamburger displayModal={displayModal} setDisplayModal={setDisplayModal}/> : <NavigationContent />}
        </>
    );
};

export default Index;


