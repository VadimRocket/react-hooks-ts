import React from 'react';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { Button } from '../ui/button/Button';
import { Heading } from '../ui/Heading';

export interface Todo {
    title: string;
    complete: boolean;
}


const initState: Todo[] = [
    {
        title: 'LocalStorage',
        complete: false
    }
];

const LocalStorage:React.FC = () => {

    const [todos, setTodos] = useLocalStorage('todos', initState);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setTodos(todos.map((todo: Todo, i: number) => {
            if (i === 0) todo.complete = true
            return todo
        }));
    }
    return (
        <>
            <Heading level='h2'>useLocalStorage example</Heading>
            <Heading level='p'>see Local Storage (F12 / Application / Local Storage)</Heading>
            <Button onClick={handleClick}>Add to LocalStorage</Button>
        </>

    )
}

export default LocalStorage;