import React from 'react'
import './ThemeBgSwitcher.less';
import { useTheme } from '@src/hooks/useTheme';
import { Button } from '../../ui/button/Button'
import { Heading } from '../../ui/Heading';


const ThemeBgSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Heading level='h2'>useTheme example</Heading>
            <Heading level='p'></Heading>
            <Button onClick={toggleTheme}>{theme}</Button>
            <div className={`theme_bg ${theme}`}>Theme:  {theme}</div>
        </>

    )
}

export default ThemeBgSwitcher;