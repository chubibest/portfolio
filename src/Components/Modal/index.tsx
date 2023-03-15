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
    overflow: 'hidden'
})

const Index = (props: React.PropsWithChildren) => {
    return (
        <Modal > {props.children} </Modal>
    );
};

export default Index;