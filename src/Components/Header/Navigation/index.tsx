import React, { useContext, useEffect, useState } from 'react';
import { WindowSize } from '../../../Context/windowSize';
import Hamburger from './MobileActions'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'

const Index = () => {
    const isMobile = useContext(WindowSize)
    const [displayModal, setDisplayModal] = useState(false)
    const [renderHam, setRenderHam] = useState(true)

    useEffect(() => {
        setDisplayModal(false)
        setRenderHam(true)

    }, [isMobile])

    useEffect(() => {
        setRenderHam(true)
    }, [displayModal])
    return (
        <>
            {isMobile && displayModal ? <Modal setDisplayModal={setDisplayModal} setRenderHam={setRenderHam } > <NavigationContent />  </Modal>: null}
            {isMobile && renderHam ? <Hamburger displayModal={displayModal} setDisplayModal={setDisplayModal}/> : <NavigationContent />}
        </>
    );
};

export default Index;
