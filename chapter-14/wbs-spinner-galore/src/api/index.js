export async function getSinglePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
}

export async function getPokemon(number) {
    const pokemon = [];
    for (let i = 1; i < number; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemon.push(await res.json());
    }
    return pokemon;
}

export async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export async function getSinglePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
