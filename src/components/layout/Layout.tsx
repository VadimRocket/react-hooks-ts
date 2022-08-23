import React, { FC } from 'react'

interface ILayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: FC<ILayoutProps> = ({ children, title }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout