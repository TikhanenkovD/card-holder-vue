<template>
<div class="card">
    <cardPreview :cardNumber="456345345345"></cardPreview>

</div>
</template>

<script>
import cardPreview from "./card-preview.vue";
export default {
    name: "card",
    components: {
        cardPreview
    },
    props: {

    }
}
</script>

<style lang="less">
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    width: 100%;
    height: 600px;
    border-radius: 16px;
    background-color: #d3e6f8;
    padding: 2rem;
}
</style>
