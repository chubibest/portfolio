import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text : string
}
const Button = styled.button({

})

const Index = ({text}: ButtonProps) => {
    return (
        <Button>
            {text}
        </Button>
    );
};

export default Index;