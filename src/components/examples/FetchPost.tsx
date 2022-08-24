import React from 'react';
import { useFetch } from '@src/hooks/useFetch';
import { Heading } from '../ui/Heading';

const FetchPost = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts/1';

    const { data, error, isLoading } = useFetch(URL);
    return (
        <>
            <Heading level='h2'>useFetch example</Heading>
            <Heading level='p'>{isLoading && <span>Loading...</span>}</Heading>
            <Heading level='p'>Data: {JSON.stringify(data, null, 3)}</Heading>
            <Heading level='p'>{error && <span>{error}</span>}</Heading>
        </>
    );
};

export default FetchPost;