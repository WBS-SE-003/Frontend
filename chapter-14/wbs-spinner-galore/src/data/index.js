import {
    getAllPosts,
    getPokemon,
    getSinglePokemon,
    getSinglePost,
} from '../api';

export async function loadPokemon() {
    const pokemon = getPokemon(151);
    return { pokemon };
}

export async function loadSinglePokemon({ params }) {
    const pokemon = getSinglePokemon(params.id);
    return { pokemon };
}

export async function loadAllPosts() {
    const posts = await getAllPosts();
    return { posts };
}

export async function loadSinglePost({ params }) {
    const post = await getSinglePost(params.id);
    return { post };
}
