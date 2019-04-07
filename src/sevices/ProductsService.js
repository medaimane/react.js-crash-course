import axios from 'axios';

export default class ProductsService {
    static apiUrl = 'http://localhost:3004';

    static async getProducts() {
        const res = await axios.get(`${this.apiUrl}/products`);
        return res.data;
    }

    static async addProduct({ name, description, price}) {
        const res = await axios.post(`${this.apiUrl}/products`, {
            name,
            description,
            price,
            review: '0',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false,
            imageUrl: '',
        });
        return res.data;
    }
}