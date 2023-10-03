<template>
  <div class="wrapper">
    <button type="button" class="btn" @click="$emit('PlusScale')">
      <p class="number">+</p>
      <!-- <p class="number"><img class="img" src="./minus.png" /></p> -->
    </button>
    <button type="button" class="btn" @click="$emit('MinusScale')">
      <p class="number">-</p>
      <!-- <p class="number"><img class="img" src="./plus.png" /></p> -->
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      c: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/_variables.scss";
@use "~/assets/scss/abstract/_mixins.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 14px;
}

.btn {
  //margin-top: 30px;
  width: 40px;
  height: 40px;
  background-color: #2e2e2e;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  /*position: absolute;
    left: 0px;
    bottom: 0px;*/
  &:active {
    background-color: variables.$blue;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}

.number {
  //font-family: "Montserrat", sans-serif;
  color: variables.$IOS-theme;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  user-select: none;
}

.img {
  display: block;
  max-width: 100px;
}
</style>