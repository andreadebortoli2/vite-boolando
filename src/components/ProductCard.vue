<script>
export default {
    name: 'ProductCard',
}
</script>

<template>
    <div class="img_container">
        <img class="item_img" src="./assets/img/1.webp" alt="">
        <img class="item_img_hover" src="./assets/img/1b.webp" alt="">

        <div class="add_favourite">&hearts;</div>

        <div class="item_marks">
            <span class="discount">-50%</span>
            <span class="susteinability_mark">Sostenibilità</span>
        </div>
    </div>

    <div class="article_info">

        <div>Levi's</div>
        <h5>RELAXED FIT TEE UNISEX</h5>
        <div class="price">
            <span class="current_price">14,99&euro;</span>
            <span class="older_price">29,99&euro;</span>
        </div>

    </div>
</template>

<style lang="scss">
@use '../assets/partials/ProductCard'
</style>