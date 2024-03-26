<script>
export default {
    name: 'ProductModal',
    props: {
        show: Boolean,
        frontImage: String,
        backImage: String,
        brand: String,
        name: String,
        price: Number,
        isInFavourites: Boolean,
        badges: Array,
    },
    data() {
        return {
            susteinability: '',
            discount: 0,
            active: 1,
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
    <div class="modal" v-if="show === true">
        <div class="product-modal-card">
            <div class="modal-left">

                <div class="product-images-slider">
                    <img v-if="active === 1" :src="frontImage" alt="">
                    <img v-if="active === 2" :src="backImage" alt="">
                </div>
            </div>
            <div class="modal-right">
                <div class="modal-close" @click="show = false, discount = 0, active = 1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
                            https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div class="product-brand">{{ brand }}</div>
                <h4 class="product-name">{{ name }}</h4>
                <div class="product-info">
                    <div class="product-badges">
                        <div v-for=" badge  in  badges " :class="badge.type">{{ badge.value }}</div>
                    </div>
                    <div class="product-price">
                        <div class="price" v-if="discount !== 0">{{ price }} &euro;</div>
                        <div class="final-price">{{ finalPrice(badges, price, discount) }} &euro;</div>
                    </div>
                </div>
                <div class="thumb">
                    <img class="front-image" :src="frontImage" alt="" @click="active = 1">
                    <img class="back-image" :src="backImage" alt="" @click="active = 2">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/partials/ProductModal'
</style>