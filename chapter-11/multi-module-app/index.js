import { fetchProducts } from './modules/network.js';
import { addProductToLocalStorage } from './modules/storage.js';
import { createProductCard } from './modules/ui.js';
import { productContainer } from './modules/ui.js';
import { showErrorMessage } from './modules/ui.js';

async function main() {
    const products = await fetchProducts();

    if (products.error) {
        showErrorMessage();
    } else {
        products.data.forEach((product) => {
            const productCard = createProductCard(product);
            productContainer.appendChild(productCard);
        });

        productContainer.addEventListener('click', (event) => {
            if (event.target.tagName == 'BUTTON') {
                const id = event.target.dataset.id;

                const clickedProduct = products.data.find(
                    (product) => product.id == id
                );
                addProductToLocalStorage(clickedProduct);
            }
        });
    }
}

main();
