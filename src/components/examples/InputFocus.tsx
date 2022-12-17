import React from 'react'
import { useFocus } from '../../hooks/useFocus';
import { Heading } from '../ui';

export const InputFocus: React.FC = () => {

    const [inputRef, setInputFocus] = useFocus();

    React.useEffect(() => {
        setInputFocus();
    }, []);

    return (
        <div>
            <Heading tag='h2'>useFocus example</Heading>
            <input className='input' ref={inputRef} type='text' placeholder='typing....' />
        </div>
    )
}

