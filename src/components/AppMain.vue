<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
}
</script>

<template>
    <main id="site_main">
        <div class="container d-flex">
            <div class="item_container" v-for="n in 6">
                <ProductCard />
            </div>
        </div>
    </main>
</template>

<style></style>