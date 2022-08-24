import { useRef } from 'react';

export const useFocus = () => {

    const htmlElRef = useRef<HTMLInputElement | null>(null);

    const setFocus = () => {
        htmlElRef.current?.focus();
    };

    return [htmlElRef, setFocus] as const;
};


/*
USAGE: 
import { useFocus } from "../hooks/useFocus";
  const [inputRef, setInputFocus] = useFocus();

    React.useEffect(() => {
    setInputFocus();
  }, []);

   <input
        ref={inputRef}
        type="text"
      />
*/
