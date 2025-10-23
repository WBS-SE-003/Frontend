import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { Loading } from '../components';
import { PokemonPreview } from '../components/PokemonPreview';

export function PokemonList() {
    const { pokemon } = useLoaderData();
    return (
        <div className='flex gap-2 flex-wrap justify-center'>
            <Suspense fallback={<Loading message='loading pokemon' />}>
                <PokemonPreview promise={pokemon} />
            </Suspense>
        </div>
    );
}
