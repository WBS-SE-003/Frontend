import { Instructions, SearchForm, SearchResults } from '../components';
import { searchProducts } from '../api/index.js';
import { useActionState } from 'react';
import { use } from 'react';
import { formatError } from 'zod/v4';

const productsPromise = searchProducts();

async function submitAction(previousState, formData) {
    const category = formData.get('category');
    const query = formData.get('query');
    const minPrice = isNaN(parseFloat(formData.get('minPrice')))
        ? undefined
        : parseFloat(formData.get('minPrice'));
    const maxPrice = isNaN(parseFloat(formData.get('maxPrice')))
        ? undefined
        : parseFloat(formData.get('maxPrice'));

    const products = await searchProducts({
        category,
        minPrice,
        maxPrice,
        query,
    });

    return {
        error: products.error,
        products: products.products,
        input: { category, minPrice, maxPrice, query },
    };
}

const Search = () => {
    const products = use(productsPromise);
    const [state, formAction, isPending] = useActionState(
        submitAction,
        products
    );
    console.log(state);
    return (
        <div className='flex flex-col items-center'>
            {state?.error && (
                <p className='text-xl text-red-600'>{state.error}</p>
            )}
            <SearchForm
                formAction={formAction}
                isPending={isPending}
                state={state}
            />
            <SearchResults products={state.products} />
            <Instructions path='/search.md' />
        </div>
    );
};

export default Search;
