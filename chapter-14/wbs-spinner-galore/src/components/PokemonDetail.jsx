import { use } from 'react';
export function PokemonDetail({ promise }) {
    const pokemon = use(promise);

    return (
        <div className='text-center text-5xl capitalize bg-red-100 p-22'>
            <p className='mb-10'>{pokemon.name}</p>
            <img
                src={pokemon.sprites.other['official-artwork']['front_default']}
                alt=''
                className='mx-auto'
            />
        </div>
    );
}
