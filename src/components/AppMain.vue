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
        <div v-for="n in 6">
            <ProductCard />
        </div>
    </main>
</template>

<style scoped>
main {
    height: 600px;
    background-color: paleturquoise;
    display: flex;
    gap: 1rem;
}
</style>