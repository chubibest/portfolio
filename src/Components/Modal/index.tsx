import styled from 'styled-components';

const Modal = styled.div({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    background: 'rgb(0, 0, 0, 0.6)',
    'backdrop-filter': 'blur(5px)',
    position: 'fixed',
    top: 0,
    left: 0,
    overflow: 'hidden',
    'z-index': 2
})

interface Props extends React.PropsWithChildren {
    setDisplayModal:  React.Dispatch<React.SetStateAction<boolean>>
    setRenderHam: React.Dispatch<React.SetStateAction<boolean>>
}

const Index = ({setRenderHam, children, setDisplayModal }: Props) => {
    return (
        <Modal onClick={() => { setRenderHam(false); setDisplayModal(false);}}> {children} </Modal>
    );
};

export default Index;