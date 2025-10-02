export function addProductToLocalStorage(product) {
    const localStorageState =
        JSON.parse(localStorage.getItem('products')) || [];

    localStorage.setItem(
        'products',
        JSON.stringify([...localStorageState, { ...product }])
    );
}
