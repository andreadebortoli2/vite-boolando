<script>
import ProductCard from './ProductCard.vue';
// import { products } from '../data';
// import axios from 'axios';
import { store } from '../store';
import axios from 'axios';
import ProductModal from './ProductModal.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
        ProductModal,
    },
    data() {
        return {
            // products: []
            store,
            showModal: false,
            modalProduct: {},
        }
    },
    methods: {
        showProductModal(id) {
            this.showModal = !this.showModal;
            // console.log(id);
            axios.get(`http://localhost:3000/products/${id}`).then(response => {
                // console.log(response.data);
                this.modalProduct = response.data;
            })
        },
    },
    mounted() {
        /* axios.get('http://localhost:3000/products').then(response => {
            // console.log(response.data);
            this.products = response.data
        }) */
        store.getProductsFromApi(store.productsApiUrl)
    }
}
</script>

<template>
    <main id="site_main">
        <div class="container">
            <ProductCard :id="product.id" :frontImage="product.frontImage" :backImage="product.backImage"
                :brand="product.brand" :name="product.name" :price="product.price"
                :isInFavourites="product.isInFavourites" :badges="product.badges" v-for="product in store.products"
                @showProduct="showProductModal" />
        </div>

        <ProductModal :show="this.showModal" :frontImage="modalProduct.frontImage" :backImage="modalProduct.backImage"
            :brand="modalProduct.brand" :name="modalProduct.name" :price="modalProduct.price"
            :isInFavourites="modalProduct.isInFavourites" :badges="modalProduct.badges" />

    </main>
</template>

<style></style>