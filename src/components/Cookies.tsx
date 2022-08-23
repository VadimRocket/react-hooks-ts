import React from 'react'
import { useCookie } from '../hooks/useCookie';


const Cookies = () => {

    const [value, updateCookie, deleteCookie] = useCookie("token", "")

    return (
        <>
            <div>Token{value}</div>
            <button onClick={() => updateCookie(String(new Date()))}>UPDATE token</button>
            <button onClick={ deleteCookie }>DELETE token</button>
        </>
    )
}

export default Cookies