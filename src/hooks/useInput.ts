/*
В данном хуке, помимо возвращаемого значения и функций изменения, на событие onBlur навешена логика обязательного/ необязательного поля 
с возможностью передачи флага required вторым параметром хука. Ошибка будет храниться отдельным состоянием и ее также можно будет легко кастомизировать.
 */
import { useState, FocusEvent, ChangeEvent } from 'react';

export const useInput = (initital: string, required: boolean) => {
    const [value, setValue] = useState(initital);
    const [error, setError] = useState<string | null>(null);

    return {
        value,
        onBlur: (e: FocusEvent<HTMLInputElement>) => {
            if (!e.target.value && required) setError('Required field');
            else setError(null);
        },
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        error,
    };
};

/*
Usage:
import useInput from './hooks/useInput'
export Component = () => {
const name = useInput("Ola", true);
  return (
    <>
        <form>
          <input {...name} />
          {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
        </form>
    </>
  )
}
*/