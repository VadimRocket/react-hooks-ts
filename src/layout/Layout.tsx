import React from 'react'
interface ILayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const Layout: React.FC<ILayoutProps> = ({ children, title }) => <div title={title}>{children}</div>
