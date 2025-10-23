import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router';
import { ErrorElement, Loading } from './components';
import {
    loadAllPosts,
    loadPokemon,
    loadSinglePokemon,
    loadSinglePost,
} from './data';
import { MainLayout } from './layouts';
import { Home, NotFound } from './pages';
import { Pokemon } from './pages/Pokemon';
import { PokemonList } from './pages/PokemonList';
import { Post } from './pages/Post';
import { PostList } from './pages/PostList';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route
                    path='/pokemon'
                    element={<PokemonList />}
                    loader={loadPokemon}
                    errorElement={<ErrorElement />}
                    hydrateFallbackElement={
                        <Loading message='initial loading' />
                    }
                />
                <Route
                    path='/pokemon/:id'
                    element={<Pokemon />}
                    loader={loadSinglePokemon}
                    errorElement={<ErrorElement />}
                    hydrateFallbackElement={
                        <Loading message='inital loading' />
                    }
                />
                <Route
                    path='/posts'
                    element={<PostList />}
                    loader={loadAllPosts}
                    errorElement={<ErrorElement />}
                    hydrateFallbackElement={
                        <Loading message='initial loading' />
                    }
                />
                <Route
                    path='/posts/:id'
                    element={<Post />}
                    loader={loadSinglePost}
                    errorElement={<ErrorElement />}
                    hydrateFallbackElement={
                        <Loading message='inital loading' />
                    }
                />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
