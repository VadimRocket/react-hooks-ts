import React from 'react'
import { useOutside } from '@src/hooks/useOutside'

import { Heading, Button } from '../ui'



export const Outside: React.FC = () => {
    const { ref, isShow, setIsShow } = useOutside(false)

    const handleClick = () => {
        setIsShow(true)
    }
    return (
        <>
            <Heading tag='h2'>useOutside example</Heading>
            <div ref={ref}>
                <Heading tag='p'> isShow: {JSON.stringify(isShow)}</Heading>
                <div className={`block ${isShow ? 'active' : ''}`}>Try to click on the area outside the button, hide div</div>
                <Button onClick={handleClick}>Show data</Button>
            </div>

        </>
    )
}



