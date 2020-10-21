<template>
<div class="select">
    <select class="select__input" v-model="expiresM">
        <option value="" disabled selected>Month</option>
        <option v-for="n in 12" :value="n < 10 ? '0' + n : n" :key="n">
            {{ 10 > n ? "0" + n : n }}
        </option>
    </select>
</div>
</template>

<script>
export default {
    Name: 'card-select'
};
</script>

<style>
</style>
