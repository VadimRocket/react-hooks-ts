// Save Data to Local Storage
import { useEffect, useState } from 'react';
import { Todo } from '@src/components/examples/LocalStorage';

export const useLocalStorage = (key: string, initValue: Todo[]) => {

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);
        return initValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};


// Usage, see Local Storage (F12 -> Application -> Local Storage)
/*
const initState = [
  { title: "LocalStorage", 
    completed: false
  }
];
const [todos, setTodos] = useLocalStorage("todos", initState);

return(
  <button onClick={() => setTodos(todos.map((t,i)=> {
    if(i === 0) t.completed = true
    return t;
  }))}>
)

*/
