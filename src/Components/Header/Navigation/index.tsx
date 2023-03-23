import React, { useEffect, useState } from 'react';
import Hamburger from './MobileActions'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'
import useWindowResize from '../../../CustomHooks/windowSize'

const Index = () => {
    const isMobile = useWindowResize()
    const [displayModal, setDisplayModal] = useState(false)
    const [renderHam, setRenderHam] = useState(isMobile)

    useEffect(() => {
        setDisplayModal(false)
        setRenderHam(true)

    }, [isMobile])

    useEffect(() => {
        setRenderHam(true)
        if (displayModal){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [displayModal])
    return (
        <>
            {isMobile && displayModal ? <Modal setDisplayModal={setDisplayModal} setRenderHam={setRenderHam } > <NavigationContent />  </Modal>: null}
            {isMobile && renderHam ? <Hamburger displayModal={displayModal} setDisplayModal={setDisplayModal}/> : <NavigationContent />}
        </>
    );
};

export default Index;
