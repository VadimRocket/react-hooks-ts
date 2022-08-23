import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';

// need lib js-cookie  See npm js-cookie
export const useCookie = (name: string, initValue: any) => {

    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name);

        if (cookie) return cookie;

        Cookies.set(name, initValue);

        return initValue;

    });

    const updateCookie = useCallback(
        (newValue, options) => {
            Cookies.set(name, newValue, options);
            setValue(newValue);
        },
        [name]
    );
    const deleteCookie = useCallback(() => {
        Cookies.remove(name);
        setValue(null);
    }, [name]);
    
    return [value, updateCookie, deleteCookie];
};

// Usage
/*
  const [value, updateCookie, deleteCookie] = useCookie("token", "")
  return(
    <>
  <div>Token{value}</div>
  <button onClick={() => updateCookie(String(new Date()))}>UPDATE token</button>
  <button onClick={deleteCookie}>DELETE token</button>
  </>
  )
*/
