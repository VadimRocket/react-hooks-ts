import React from 'react';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { Heading, Button } from '../ui'

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

export const LocalStorage: React.FC = () => {

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
            <Heading tag='h2'>useLocalStorage example</Heading>
            <Heading tag='p'>see Local Storage (F12 / Application / Local Storage)</Heading>
            <Button onClick={handleClick}>Add to LocalStorage</Button>
        </>

    )
}

