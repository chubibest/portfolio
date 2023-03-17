import React from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const Title = styled.p(({theme}) => ({
    lineHeight: 1,
    span: {
        color: theme.colors.boldPink
    }
}))

function Index() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Backend', 'DevOps', 'Full Stack', 'Software Engineer'],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Title >
      <span ref={el}/>
    </Title>
  );
}

export default Index