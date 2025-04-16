import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'; // Import useParams to get URL params
import {getProduct} from '../api/products';
import {Product} from "../types.ts"; // Import your getProduct function

const ProductDetail = () => {
    const {id} = useParams();  // Get the product ID from the URL
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            console.log("Fetching product with ID:", id);  // Log the ID being fetched
            getProduct(id)  // Fetch product details by ID
                .then((data) => {
                    console.log("Product data fetched:", data);  // Log the fetched data
                    setProduct(data);  // Store the fetched product
                })
                .catch((err) => {
                    setError('Failed to fetch product details');
                    console.error(err);
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="product-detail container mx-auto p-8 max-w-3xl bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">{product?.title}</h1>
            <div className="text-center text-2xl">
                <p className="text-md text-gray-700 mb-6">{product?.description}</p>
                <p className="text-2xl font-bold text-emerald-600 mb-4">Price: ${product?.price}</p>
                <p className="text-2xl font-bold text-yellow-400 mb-4">Rating: {product?.rating}</p>
                <p className="text-md font-bold text-gray-800 mb-2">Stock: {product?.stock}</p>
            </div>
        </div>
    );
};

export default ProductDetail;