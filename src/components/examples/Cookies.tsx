import React from 'react'
import { useCookie } from '../../hooks/useCookie';
import { Heading } from '../ui/Heading';


const Cookies: React.FC = () => {

    const [value, updateCookie, deleteCookie] = useCookie("token", "")

    return (
        <>
            <Heading tag="h2">useCookie example</Heading>
            <Heading tag="h3"> Token {value}</Heading>
            <button onClick={() => updateCookie(String(new Date()))}>UPDATE token</button>
            <button onClick={deleteCookie}>DELETE token</button>
        </>
    )
}

export default Cookies