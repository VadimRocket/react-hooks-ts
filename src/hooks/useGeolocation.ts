// The Hook provides the ability to get the location of the device
import { SetStateAction, useEffect, useState } from 'react';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
} as PositionOptions;

interface IGeolocationCoordinates {
  accuracy?: number;
  altitude?: null;
  altitudeAccuracy?: null;
  heading?: null;
  latitude: number;
  longitude: number;
  speed: null;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGeolocation = (positionOptions = options) => {
  const [geolocationCoordinates, setGeolocationCoordinates] = useState<
    Partial<IGeolocationCoordinates>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const handleSuccess = (event: { coords: SetStateAction<{}> }) => {
      setLoading(false);
      setError(null);
      setGeolocationCoordinates(event.coords);
    };

    const handleError = (event: SetStateAction<GeolocationPositionError>) => {
      setError(event);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      positionOptions,
    );

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      positionOptions,
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [positionOptions]);

  return { loading, error, geolocationCoordinates };
};

/* USAGE:
const Geolocation = () => {
    const { loading,
        error,
        geolocationCoordinates,
    } = useGeolocation();

    return (
        <>
            <Heading tag="h2">useGeolocation example</Heading>
            {loading && <Preloader />}
            <Heading tag="p">
                {
                    error
                        ? (<span>{error?.message}</span>)
                        : (<span>latitude: {geolocationCoordinates?.latitude} &times; longitude: {geolocationCoordinates?.longitude} </span>)
                }
            </Heading>
        </>
    )
}
 */
