import React from 'react'
import { useToggle } from '@src/hooks/useToggle';
import { Button } from '../ui/button/Button';
import { Heading } from '../ui/Heading';

const Toggle: React.FC = () => {
    const [value, setValue] = useToggle(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setValue();
    }
    return (
        <>
            <Heading tag='h2'>useToggle example</Heading>
            <Button onClick={handleClick}>Click</Button>
            <Heading tag='p'>Value: {`${value}`}</Heading>
        </>
    )
}

export default Toggle;