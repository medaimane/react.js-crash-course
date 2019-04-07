import axios from 'axios';

export default class ProductsService {
    static apiUrl = 'http://localhost:3004';

    static async getProducts() {
        const res = await axios.get(`${this.apiUrl}/products`);
        return res.data;
    }
}