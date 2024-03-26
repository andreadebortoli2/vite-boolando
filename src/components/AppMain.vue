<script>
import ProductCard from './ProductCard.vue';
// import { products } from '../data'
// import axios from 'axios';
import { store } from '../store'
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            // products: []
            store,
            show: false,
            modalProduct: ''
        }
    },
    methods: {
        showProductModal(id) {
            this.show = !this.show;
            console.log(id);
            axios.get(`http://localhost:3000/products/${id}`).then(response => {
                console.log(response.data);
                this.modalProduct = response.data;
            })
        }
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
        <div class="modal" v-if="show === true">
            <div class="product-modal-card">
                <div class="modal-close" @click="show = !show">X</div>
                <div class="product-name">{{ modalProduct.name }}</div>
            </div>

        </div>
    </main>
</template>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;

    .product-modal-card {
        width: 400px;
        height: 400px;
        background-color: darkslateblue;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .modal-close {
            font-size: 3rem;
            color: orangered;
            background-color: palevioletred;
            width: fit-content;
        }

        .product-name {
            color: white;
        }
    }
}
</style>