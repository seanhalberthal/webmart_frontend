import {useState, useEffect} from 'react';
import {getAllProducts} from '../api/products';
import {useNavigate} from "react-router-dom";
import {Product} from "../types.ts";



const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data || []);
            })
            .catch((err) => {
                setError("Failed to fetch products");
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleProductClick = async (id: string) => {
        navigate(`/products/${id}`);
    };

    return (
        <div>
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No products available.</p>
            ) : (
                <div className="mx-auto grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-8 p-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow-md p-4 bg-white transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                            <p className="text-lg font-bold text-green-600">${product.price}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                onClick={() => handleProductClick(product.id)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;