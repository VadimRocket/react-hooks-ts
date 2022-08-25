import React from 'react'
import { useFocus } from '../../hooks/useFocus';
import { Heading } from '../ui/Heading';

const InputFocus:React.FC = () => {

    const [inputRef, setInputFocus] = useFocus();

    React.useEffect(() => {
        setInputFocus();
    }, []);

    return (
        <div>
            <Heading level='h2'>useFocus example</Heading>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default InputFocus;