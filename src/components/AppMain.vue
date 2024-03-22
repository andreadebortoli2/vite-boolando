<script>
import ProductCard from './ProductCard.vue';
import { products } from '../data'

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            products
        }
    }
}
</script>

<template>
    <main id="site_main">
        <div class="container d-flex">

            <ProductCard :firstProductImage="product.firstProductImage" :secondProductImage="product.secondProductImage"
                :discount="product.discount" :sustenability="product.sustenability" :brand="product.brand"
                :model="product.model" :price="product.price" v-for="product in products" />

        </div>
    </main>
</template>

<style></style>