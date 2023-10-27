const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
}

const searchProducts = async (searchTerm) => {
    try{
        if(searchTerm){
            const response = await fetch(`http://localhost:3000/products/search/${searchTerm}`)
            if(response.ok){
                const data = await response.json();
                return data;
            }
        }
    } catch(error) {
        console.error('error ao buscar o produto', error)
    }
    return [];

};

const createProducts = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.error('erro ao criar o produto: '. error)
        return false;
        
    }
}

export { fetchProducts, searchProducts, createProducts };