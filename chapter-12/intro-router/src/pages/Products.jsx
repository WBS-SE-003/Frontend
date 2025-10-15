import { Product } from '../components/Product';
import { useOutletContext } from 'react-router';
export function Products() {
    const { products } = useOutletContext();
    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
