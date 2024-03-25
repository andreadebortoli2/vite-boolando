import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    products: [],
    productsApiUrl: 'http://localhost:3000/products',
    getProductsFromApi(url) {
        axios.get(url).then(response => {
            // console.log(response.data);
            this.products = response.data
        })
    }
})