import axios from 'axios';

const API_BASE = 'http://localhost:8080/v1';

export const createProduct = async (data: any) => {
    const res = await axios.post(`${API_BASE}/products`, data);
    return res.data;
};

export const getProduct = async (productID: string) => {
    const res = await axios.get(`${API_BASE}/products/${productID}`);
    return res.data;
};

export const getAllProducts = async () => {
    const res = await axios.get(`${API_BASE}/products/`);
    return res.data;
};