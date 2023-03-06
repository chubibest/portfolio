import React from 'react';
import styled from 'styled-components';
import Button from '../Button'

const Talk = styled.div(({ theme }) => ({
    
}))
const Index = () => {
    return (
        <Talk>
            <div className='fontSmall third'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur dolorem numquam itaque, eius nisi sapiente beatae voluptatibus, laudantium provident id sit illo, doloribus perspiciatis est explicabo magnam repellendus sunt.
            </div>
            <Button className='fontSmall btn-margin-top' text='Check Out My Resume' />
        </Talk>
    );
};

export default Index;