import React, { useState } from 'react'
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Button } from '../ui/button/Button';
import { Heading } from '../ui/Heading';

const DidMountEffect = () => {
    const [value, setValue] = useState<number>(0);

    useDidMountEffect(() => {
        alert("useDidMountEffect worked only when props changed.");
    }, [value]);

    const handleClick = () => {
        setValue(prev => prev + 1)
    }

    return (
        <>  
            <Heading level='h2'>useDidMountEffect example</Heading>
            <Button onClick={handleClick}>Click to increase</Button>
            <Heading level='p'>Value {value}</Heading>
        </>
    )
}

export default DidMountEffect;