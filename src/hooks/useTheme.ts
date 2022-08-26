/*
Суть: изменение background-color приложения
Чтобы данный хук заработал, не забудьте добавить стили для оформления темы.
Хук хранит первоначальное состояние в localStorage и затем помещает его в useState.
Если тема отсутствует в localStorage, то берётся дефолтное значение «light»
*/

import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {

        if (theme !== 'dark') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);

    return { theme, toggleTheme };
};


/*
Usage:
import useTheme from './hooks/useTheme';

export default function Component () {
    const { theme, toggleTheme } = useTheme();
    return( 
    <div className={`theme-bg ${theme}`}>
        <button onClick={toggleTheme}></button>
    </div>
    )
}

// LESS &  SCSS
.theme_bg {
    background-color: whitesmoke;
    color: black;
    padding: 1rem;
    margin-top: 1rem;

    &.dark {
        background-color: black;
        color: white;
    }
}
   // CSS
  .theme_bg.dark {
      background-color: #000;
    }
*/