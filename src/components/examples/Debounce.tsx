import React from 'react'
import { useDebounce } from "../../hooks/useDebounce";

const Debounce = () => {

    const [value, setValue] = React.useState<string>("");
    const delay = 1000;
    const debouncedValue = useDebounce(value, delay);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className='mt-1'>
            <input value={value} onChange={handleChange} />
            <br />
            <p>Current value: {value}</p>
            <p>Debounced value: {debouncedValue}</p>
        </div>
    );
}

export default Debounce


