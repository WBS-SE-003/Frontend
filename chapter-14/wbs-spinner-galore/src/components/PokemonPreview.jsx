import { use } from 'react';
import { Link } from 'react-router';

export function PokemonPreview({ promise }) {
    const pokemon = use(promise);

    return (
        <>
            {pokemon.map((poke) => {
                return (
                    <div
                        key={poke.id}
                        className='bg-slate-100 w-44 text-center'
                    >
                        <Link to={`/pokemon/${poke.id}`}>
                            <p>{poke.name}</p>
                            <img
                                src={poke.sprites['front_default']}
                                alt=''
                                className='mx-auto'
                            />
                        </Link>
                    </div>
                );
            })}
        </>
    );
}
