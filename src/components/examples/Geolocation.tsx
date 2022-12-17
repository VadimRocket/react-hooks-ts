import React from 'react'
import { useGeolocation } from '@src/hooks/useGeolocation'
import { Heading, Preloader } from '../ui';

export const Geolocation: React.FC = () => {
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

