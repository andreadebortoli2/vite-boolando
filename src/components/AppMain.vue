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
    <main>
        <div class="container" v-for="n in 6">
            <ProductCard />
        </div>
    </main>
</template>

<style></style>