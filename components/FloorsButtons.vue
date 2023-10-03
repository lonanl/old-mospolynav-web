<template>
  <div class="wrapper">
    <button class="btn" :ref="'button' + n" v-for="n in numberOfFloors" :key="n"
      @click="$emit('change', { update: n }); activeFloor = n;">
      <p class="number">{{ n }}</p>
    </button>

    <!-- <button type="button" class="btn">
      <p class="number">1</p>
    </button>
    <button type="button" class="btn">
      <p class="number">2</p>
    </button>
    <button type="button" class="btn">
      <p class="number">3</p>
    </button>
    <button type="button" class="btn">
      <p class="number">4</p>
    </button>
    <button type="button" class="btn">
      <p class="number">5</p>
    </button> -->
  </div>
</template>

<script>
export default {
  props: {
    numberOfFloors: Number,
  },
  data() {
    return {
      activeFloor: 1,
    };
  },
  mounted() {
    this.$refs[`button${this.activeFloor}`][0].classList.toggle("btn_active");
  },
  methods: {},
  watch: {
    activeFloor(newVal, oldVal) {
      this.$refs[`button${oldVal}`][0].classList.toggle("btn_active");
      this.$refs[`button${newVal}`][0].classList.toggle("btn_active");
    },
  }
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/abstract/_variables.scss";
@use "~/assets/scss/abstract/_mixins.scss";

.wrapper {
  display: flex;
  flex-direction: column-reverse;
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

  &_active {
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
}</style>