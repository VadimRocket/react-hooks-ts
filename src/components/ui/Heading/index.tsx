import React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

export const Heading: React.FC<HeadingProps> = ({ tag = "p", children, className }) => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(tag, props, children)
    return <Heading className={className}>{children}</Heading>
}

//  <Heading tag="h2">{headingText}</Heading>