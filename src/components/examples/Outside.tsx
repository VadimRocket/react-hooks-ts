import React from 'react'
import { useOutside } from '@src/hooks/useOutside'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/button/Button'


const Outside = () => {
    const { ref, isShow, setIsShow } = useOutside(false)

    const handleClick = () => {
        setIsShow(true)
    }
    return (
        <>
            <Heading level='h2'>useOutside example</Heading>
            <div ref={ref}>
                <Heading level='p'> isShow: {JSON.stringify(isShow)}</Heading>
                <div className={`block ${ isShow ? 'active' : ''}`}>Try to click on the area outside the button, hide div</div>
                <Button onClick={handleClick}>Show data</Button>
            </div>

        </>
    )
}

export default Outside;

