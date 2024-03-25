<script>
import ProductCard from './ProductCard.vue';
// import { products } from '../data'
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products').then(response => {
            // console.log(response.data);
            this.products = response.data
        })
    }
}
</script>

<template>
    <main id="site_main">
        <div class="container">

            <ProductCard :frontImage="product.frontImage" :backImage="product.backImage" :brand="product.brand"
                :name="product.name" :price="product.price" :isInFavourites="product.isInFavourites"
                :badges="product.badges" v-for="product in products" />

        </div>
    </main>
</template>

<style></style>