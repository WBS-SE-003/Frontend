import { useParams } from 'react-router';
import { useOutletContext } from 'react-router';
export function Detail() {
    const { products } = useOutletContext();
    const { id } = useParams();

    const product = products.find((p) => p.id == id);

    return <p>Details for {product.title}</p>;
}
