import React, { FC } from 'react'

interface ILayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: FC<ILayoutProps> = ({ children, title }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Layout