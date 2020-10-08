<template>
<div class="cardPreview">
    <p class="cardPreview__number">{{ newCardNumber }}</p>
    <div class="cardPreview__bottomBlock">
        <div class="cardPreview__ownerBlock">
            <p class="cardPreview__ownerTitle">Card Owner</p>
            <p class="cardPreview__ownerValue">{{ cardOwner || "FullName" }}</p>
        </div>
        <div class="cardPreview__expiresBlock">
            <p class="cardPreview__expiresTitle">Expires</p>
            <p class="cardPreview__expiresValue">
                {{ cardExpiresM || "MM" }} / {{ cardExpiresY || "YY" }}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    Name: "card-preview",
    props: {
        cardNumber: Number,
        cardOwner: String,
        cardExpiresM: Number,
        cardExpiresY: Number,
    },
    computed: {
        newCardNumber: function () {
            console.log(this.cardNumber.toString());
            return this.cardNumber.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
        }
    }
};
</script>

<style lang="less">
.cardPreview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 420px;
    width: 100%;
    height: 245px;
    border-radius: 16px;
    background: linear-gradient(0deg,
            rgba(2, 0, 36, 0.3) 0%,
            rgba(108, 9, 121, 0.2) 49%,
            rgba(0, 212, 255, 0.3) 100%);
    color: white;

    &__number {
        font-size: 18px;
    }

    &__bottomBlock {
        display: flex;
        justify-content: space-around;
    }

    &__ownerBlock {
        padding: 8px;
    }

    &__expiresBlock {
        padding: 8px;
    }
}
</style>
