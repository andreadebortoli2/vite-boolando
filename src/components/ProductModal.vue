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
    }
}
</script>

<template>
    <div class="modal" v-if="show === true">
        <div class="product-modal-card">
            <div class="modal-left">
                <div class="thumb">
                    <img class="thumb front-image" :src="frontImage" alt="">
                    <img class="thumb back-image" :src="backImage" alt="">
                </div>
                <img class="active-image" src="" alt="">
            </div>
            <div class="modal-right">
                <div class="modal-close" @click="show = !show">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License -
                            https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div class="product-brand">{{ brand }}</div>
                <div class="product-name">{{ name }}</div>
                <div class="susteinability"></div>
                <div class="price">{{ price }} &euro;</div>
                <div class="discount"></div>
                <div class="final-price"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/partials/ProductModal'
</style>