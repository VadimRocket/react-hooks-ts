import React from 'react'
import { Heading } from '@src/components/ui/Heading'
import { useGeolocation } from '@src/hooks/useGeolocation'
import { Preloader } from '@src/components/ui/preloader/Preloader'


const Geolocation = () => {
    const {
        loading,
        error,
        geolocationCoordinates,
    } = useGeolocation();

    return (
        <>
            <Heading tag='h2'>useGeolocation example</Heading>
            {loading && <Preloader />}
            <Heading tag='p'>
                {
                    error
                        ? (<span>{error?.message}</span>)
                        : (<span>latitude: {geolocationCoordinates?.latitude} &times; longitude: {geolocationCoordinates?.longitude} </span>)
                }
            </Heading>
        </>
    )
}

export default Geolocation