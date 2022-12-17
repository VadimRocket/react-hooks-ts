import React from 'react'
import './ThemeBgSwitcher.less';
import { useTheme } from '@src/hooks/useTheme';
import { Button, Heading } from '@src/components/ui';

export const ThemeBgSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <Heading tag='h2'>useTheme example</Heading>
            <Button onClick={toggleTheme}>{theme}</Button>
            <div className={`theme_bg ${theme}`}>Theme:  {theme}</div>
        </>

    )
}

