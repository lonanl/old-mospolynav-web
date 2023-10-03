<template>
    <div class="sidebar">
        <Search/>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
@use "../assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss";

.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    background-color: variables.$darkgrey;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
</style>