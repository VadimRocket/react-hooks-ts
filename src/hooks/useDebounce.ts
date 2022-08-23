/*
Суть хука: заблокировать слишком частые повторные рендеры в компоненте. Например: у вас есть приложение с каталогом товаров. И у него есть поле ввода, через которое пользователи ищут товары. Представим, что после ввода пользователем каждого нового символа на сервер отправляется запрос с нужной поисковой фразой.
Если пользователь вводит слово, состоящее из 10 символов, то запрос будет отправлен 10 раз. Это выглядит не очень хорошо. Вот здесь вам и поможет этот хук, и будет следить за тем, чтобы запрос был отправлен на сервер через определенный промежуток времени, когда пользователь не вводит новые символы. Это позволит вам откладывать вызовы API, чтобы они не происходили слишком часто.
*/

import { useEffect, useState } from 'react';
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};


/*
Usage: useDebounce
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default () => {
  const [value, setValue] = useState("");
  const delay = 1000;
  const debouncedValue = useDebounce(value,delay);
  const handleChange = (event: any) => {
    setValue(event.target.value);
  }
  return (
    <>
      <input value={value} onChange={handleChange} />
      <br />
      Current value: {value}
      <br />
      Debounced value: {debouncedValue}
    </>
  );
}
*/