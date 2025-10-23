import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { Loading } from '../components';
import { PokemonDetail } from '../components/PokemonDetail';

export function Pokemon() {
    const { pokemon } = useLoaderData();

    return (
        <Suspense fallback={<Loading message='loading single pokmeon' />}>
            <PokemonDetail promise={pokemon} />
        </Suspense>
    );
}
