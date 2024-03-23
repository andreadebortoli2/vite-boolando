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
        <div class="container">

            <ProductCard :frontImage="product.frontImage" :backImage="product.backImage" :brand="product.brand"
                :name="product.name" :price="product.price" :isInFavourites="product.isInFavourites"
                :badges="product.badges" v-for="product in products" />

        </div>
    </main>
</template>

<style></style>