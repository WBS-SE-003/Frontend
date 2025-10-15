import { Link } from 'react-router';
export function Product({ product }) {
    return (
        <div>
            <h2>ProductCard</h2>
            <p>{product.title}</p>
            <p>{product.id}</p>
            <Link to={`/products/${product.id}`}>Details</Link>
        </div>
    );
}
