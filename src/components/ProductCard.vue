<script>
export default {
    name: 'ProductCard',
    props: {
        firstProductImage: String,
        secondProductImage: String,
        discount: Number,
        sustenability: Boolean,
        brand: String,
        model: String,
        price: Number,
    },
    methods: {
        finalPrice(price, discount) {
            return (price - (price * discount / 100)).toFixed(2)
        }
    }
}
</script>

<template>
    <div class="item_container">
        <div class="img_container">
            <img class="item_img" :src="firstProductImage" alt="">
            <img class="item_img_hover" :src="secondProductImage" alt="">

            <div class="add_favourite">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
                        https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
            </div>

            <div class="item_marks">
                <span class="discount" v-if="discount !== 0">-{{ discount }}%</span>
                <span class="susteinability_mark" v-if="sustenability === true">Sostenibilità</span>
            </div>
        </div>

        <div class="article_info">

            <div>{{ brand }}</div>
            <h5>{{ model }}</h5>
            <div class="price">
                <span class="current_price">{{ finalPrice(price, discount) }}&euro;</span>
                <span class="older_price" v-if="discount !== 0">{{ price }}&euro;</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/partials/ProductCard'
</style>