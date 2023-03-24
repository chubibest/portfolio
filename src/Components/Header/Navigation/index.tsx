import React, { useEffect, useState } from 'react';
import Hamburger from './MobileActions'
import NavigationContent from './NavigationContent'
import Modal from '../../Modal'

const Index = () => {

    const [displayModal, setDisplayModal] = useState(false)
    const [displayHam, setDisplayHam] = useState(true)

    useEffect(() => {
        if (displayModal){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
            setDisplayHam(true)
        }
    }, [displayModal])

    return (
        <>
            {displayModal ? <Modal setDisplayModal={setDisplayModal} setDisplayHam={setDisplayHam}/> : null}
            {displayHam ? <Hamburger displayModal={displayModal} setDisplayModal={setDisplayModal}/> : null}
            <NavigationContent displayNav={displayModal} />
        </>
    );
};

export default Index;
