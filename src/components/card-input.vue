<template>
<div class="input">
    <label class="input__label" :for="label">{{label}}</label>
    <input class="input__form" :type="type" :name="label" @change="$emit" required :placeholder="placeholder" />
</div>
</template>

<script>
export default {
  Name: "card-input",
  props: {
    placeholder: String,
    type: String,
    label: String,
  },
};
</script >

<style lang="less">
.input {
    max-width: 420px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__form {
        border: 1px solid #ced6e0;
        border-radius: 8px;
        width: 100%;
        height: 29px;
        padding: 12px;
    }
}
</style>
