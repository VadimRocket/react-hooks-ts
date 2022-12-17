import React from 'react'
import { useDebounce } from "../../hooks/useDebounce";
import { Heading } from '../ui';


export const Debounce: React.FC = () => {

    const [value, setValue] = React.useState<string>("");
    const delay = 1000;
    const debouncedValue = useDebounce(value, delay);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className='mt-1'>
            <Heading tag="h2">useDebounce example</Heading>
            <input className='input' value={value} onChange={handleChange} placeholder='typing....' />
            <br />
            <p>Current value: {value}</p>
            <p>Debounced value: {debouncedValue}</p>
        </div>
    );
}



