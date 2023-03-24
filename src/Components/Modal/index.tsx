import styled from 'styled-components';

const Modal = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'none',
    background: 'rgb(0, 0, 0, 0.6)',
    'backdrop-filter': 'blur(5px)',
    position: 'absolute',
    top: 0,
    left: 0,
    'zIndex': 3,
    '@media (orientation: portrait)': {
        display: 'flex'
    }
})
interface Props {
    setDisplayModal:  React.Dispatch<React.SetStateAction<boolean>>
    setDisplayHam:  React.Dispatch<React.SetStateAction<boolean>>
}

const Index = ({setDisplayModal, setDisplayHam}: Props) => {
    return (
        <Modal
            onClick={(e) => { setDisplayHam(false); setDisplayModal(false)}}
        >
        </Modal>
    );
};

export default Index;