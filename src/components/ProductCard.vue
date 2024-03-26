<script>
export default {
    name: 'ProductCard',
    props: {
        id: Number,
        frontImage: String,
        backImage: String,
        brand: String,
        name: String,
        price: Number,
        isInFavourites: Boolean,
        badges: Array,
    },
    emits: ['showProduct'],
    data() {
        return {
            discount: 0,
        }
    },
    methods: {
        finalPrice(badges, price, discount) {
            this.discountFormattation(badges);
            return (price - (price * discount / 100)).toFixed(2);
        },
        discountFormattation(badges) {
            badges.filter(badge => badge.type === 'discount' ? this.discount = badge.value.replace(/[-%]/g, '') : 0);
        },
    },
}
</script>

<template>
    <div class="item_container">
        <div class="img_container">
            <img class="item_img" :src="frontImage" alt="">
            <img class="item_img_hover" :src="backImage" alt="">

            <div class="favourite" :class="{ added: isInFavourites }" @click="isInFavourites = !isInFavourites">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
                        https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
            </div>

            <div class="item_marks">
                <div v-for="badge in badges" :class="badge.type">{{ badge.value }}</div>
            </div>

        </div>

        <div class="article_info">

            <div>{{ brand }}</div>
            <h4 @click="$emit('showProduct', id)">{{ name }}</h4>
            <div class="price">
                <div class="current_price">{{ finalPrice(badges, price, discount) }} &euro;</div>
                <div class="older_price" v-if="discount !== 0">{{ price }} &euro;</div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/partials/ProductCard'
</style>