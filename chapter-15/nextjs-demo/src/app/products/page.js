import Link from 'next/link';
async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default async function Products() {
    const products = await fetchProducts();
    return (
        <>
            <h1>Products</h1>
            <div className='flex flex-col gap-3'>
                {products.map((product) => (
                    <Link
                        className='border-2 border-orange-200 p-2'
                        href={`/products/${product.id}`}
                        key={product.id}
                    >
                        {product.title}
                    </Link>
                ))}
            </div>
        </>
    );
}
