<template>
<div class="card">
    <cardPreview :cardNumber="456345345345"></cardPreview>
    <cardInput :label="card" :placeholder="card"></cardInput>
    <cardInput :label="name" :placeholder="name"></cardInput>
</div>
</template>

<script>
import cardPreview from "./card-preview.vue";
import cardInput from "./card-input.vue";

export default {
    name: "card",
    data: function () {
        return {
            name: "Name",
            card: "Card Number"
        }

    },
    components: {
        cardPreview,
        cardInput
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
