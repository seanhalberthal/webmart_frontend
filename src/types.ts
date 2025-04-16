export interface Product {
    id: string;
    title: string;
    price: number;
    description?: string;
    stock: number;
    rating: number;
    reviews: string[];
}