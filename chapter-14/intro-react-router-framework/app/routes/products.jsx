export async function Loader() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return { products };
}

export default function Products({ loaderData }) {
    const { products } = loaderData;
    return (
        <div>
            <h1>Products</h1>
            {products.map((p) => (
                <p>{p.title}</p>
            ))}
        </div>
    );
}
