import React from 'react';
import { useWindowSize } from '@src/hooks/useWindowSize';
import { Heading } from '../ui/Heading';

const WindowSize:React.FC = () => {
    const { width, height } = useWindowSize();

    return (
        <>
            <Heading level='h2'>useWindowSize example</Heading>
            <Heading level='p'>The dimensions of this window are: width - {width}px, height - {height}px</Heading>
        </>

    )
}

export default WindowSize;