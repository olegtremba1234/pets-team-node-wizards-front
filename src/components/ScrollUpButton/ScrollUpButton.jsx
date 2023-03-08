import React from 'react';
import { Button } from './ScrollUpButton.styled';

export const ScrollUpButton = ({ children, onClick, ...allyProps }) => {
    return (
        <Button onClick={onClick} type='button' {...allyProps} title='To top'>
            {children}
        </Button>
    );
};

export const scrollTopPage = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};