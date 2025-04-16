import {useState, useEffect} from 'react';
import {getAllProducts} from '../api/products';

const Products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                setError("Failed to fetch products");
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, []);


    return (
        <div>
            <h1>Product List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Products;