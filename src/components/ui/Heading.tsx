import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

export const Heading = ({level = "p", children, className } : HeadingProps) => {

    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
        React.createElement(level, props, children)

    return <Heading className={className}>{children}</Heading>
}



//  <Heading level="h2">{headingText}</Heading>