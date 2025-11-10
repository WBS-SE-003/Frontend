async function fetchSingleProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await fetchSingleProduct(id);
    return <h1>ProductDetail for {product.title}</h1>;
}
