import * as _ from 'lodash';
const APIURL = 'https://fakestoreapi.com/products';

export async function fetchProducts() {
    try {
        const res = await fetch(APIURL);
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        return { data: _.shuffle(data), error: null };
    } catch (error) {
        console.log(error.message);
        return { data: null, error: error };
    }
}
