import React from 'react'
import { useEscape } from '@src/hooks/useEscape';
import { useToggle } from '@src/hooks/useToggle';
import { Heading } from '../ui';

export const Escape: React.FC = () => {

    const [isToggle, setIsToggle] = useToggle(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_] = useEscape(setIsToggle);


    return (
        <>
            <Heading tag='h2'>useEscape example</Heading>
            <Heading tag='p'>Try to click on the ESC button</Heading>
            <Heading tag='p'>Toggle state:  {JSON.stringify(isToggle)}</Heading>
            <div className={`block ${isToggle ? 'active' : ''}`}>Try to click on the ESC button</div>
        </>
    )
}
