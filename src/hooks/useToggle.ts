/*
работает только с булевыми значениями. для изменения состояния нужно просто вызвать callback без передачи значения, которое хотим изменить,
при вызове callback оно изменится на противоположное.
*/
import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v: boolean) => !v);
  }, []);

  return [value, toggle] as [boolean, () => void];
};

/*
Usage:
import { useToggle } from "../hooks/useToggle";

const [value, setValue] = useToggle(false);
const handleClick = () => {
  setValue();
}
return (
  <>
    <button onClick={handleClick}>Click</button>
    <p>Value: {`${value}`}</p>
  </>
)
*/