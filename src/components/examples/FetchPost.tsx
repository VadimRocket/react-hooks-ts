import React from 'react';
import { useFetch } from '@src/hooks/useFetch';
import { Heading } from '../ui/Heading';

const FetchPost: React.FC = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts/1';

    const { data, error, isLoading } = useFetch(URL);
    return (
        <>
            <Heading tag='h2'>useFetch example</Heading>
            <Heading tag='p'>{isLoading && <span>Loading...</span>}</Heading>
            <Heading tag='p'>Data: {JSON.stringify(data, null, 3)}</Heading>
            <Heading tag='p'>{error && <span>{error}</span>}</Heading>
        </>
    );
};

export default FetchPost;