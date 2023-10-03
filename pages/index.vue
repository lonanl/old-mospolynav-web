<template>
  <div class="container">
    <!-- 
      Сделать страницу карты и аудитории на мобильной версии
      Адаптировать страницу информации
      Исправить пока аудитории в первый раз
      Сделать поиск только по аудиториям на этом этаже
      Добавить ещё одну карту
     -->
    <Sidebar class="sidebar">
      <Accordion />
    </Sidebar>
    <Search class="search-input" />
    <Accordion class="accordion-tablet" />
    <!-- <Maps /> -->
    <div class="nav">
      <NuxtLink to="/about" class="nav__button" @click="$emit('modal')">
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.137495 6.465C0.134072 6.54573 0.147201 6.62632 0.176073 6.70179C0.204945 6.77726 0.24895 6.84603 0.305383 6.90387C0.361816 6.96171 0.429483 7.00739 0.504224 7.03811C0.578965 7.06883 0.659199 7.08393 0.739994 7.0825H2.80249C3.14749 7.0825 3.42249 6.8 3.46749 6.4575C3.69249 4.8175 4.81749 3.6225 6.82249 3.6225C8.53749 3.6225 10.1075 4.48 10.1075 6.5425C10.1075 8.13 9.17249 8.86 7.69499 9.97C6.01249 11.1925 4.67999 12.62 4.77499 14.9375L4.78249 15.48C4.78512 15.644 4.85212 15.8004 4.96905 15.9155C5.08598 16.0305 5.24345 16.095 5.40749 16.095H7.43499C7.60075 16.095 7.75973 16.0291 7.87694 15.9119C7.99415 15.7947 8.05999 15.6358 8.05999 15.47V15.2075C8.05999 13.4125 8.74249 12.89 10.585 11.4925C12.1075 10.335 13.695 9.05 13.695 6.3525C13.695 2.575 10.505 0.75 7.01249 0.75C3.84499 0.75 0.374995 2.225 0.137495 6.465ZM4.02999 20.8725C4.02999 22.205 5.09249 23.19 6.55499 23.19C8.07749 23.19 9.125 22.205 9.125 20.8725C9.125 19.4925 8.07499 18.5225 6.55249 18.5225C5.09249 18.5225 4.02999 19.4925 4.02999 20.8725Z"
            fill="#EAEAEA" />
        </svg>
      </NuxtLink>
    </div>

    <div class="content">
      <p class="content__title">Приветствуем тебя!</p>
      <p class="content__text">Это сайт-помощник в навигации <br> по Московскому Политеху </p>
      <p class="content__text">Тут ты найдешь дорогу к любому месту <br> в университете</p>
      <p class="content__text">Чтобы открыть карту кампуса — выбери <br> его адрес слева или введи <br> номер аудитории в
        строке поиска</p>
      <p class="content__text">Мы, команда студентов, постараемся помочь тебе <br> не потеряться!</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
    }
  },
  methods: {
    swap() {
      [this.b1, this.b2] = [this.b2, this.b1]
    },
    choose(event) {
      if (this.activeButton != null && this.activeButton != event.currentTarget && this.activeButton.classList.contains('active')) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    },
    arrow(event) {
      event.currentTarget.classList.toggle("click");
      this.$emit('toggleCard');
    },
  },
}

</script>

<style lang="scss" scoped>
@use "../assets/scss/abstract/variables";
@use "~/assets/scss/abstract/_mixins.scss" as *;

.sidebar {
  @include media(tablet) {
    display: none;
  }
}

.search-input {
  display: none;
  width: auto;

  @include media(tablet) {
    display: flex;
    margin: 20px;
    width: calc(100vw - 40px);
  }
}

.accordion-tablet {
  display: none;
  
  @include media(tablet) {
    display: flex;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  //width: 320px;
  //margin-left: 1170px;
  //margin-top: 25px;
  position: absolute;
  top: 25px;
  right: 25px;

  @include media(tablet) {
    display: none;
  }

  &__button {
    margin-left: 10px;
    //width: 40px;
    //height: 48px;
    width: 14px;
    height: 24px;
    padding: 8px 13px;
    background: variables.$black;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:active {
      background: variables.$blue;
    }
  }
}

//.search {
//  width: 310px;
//  height: 48px;
//  display: flex;
//  flex-direction: row;
//  align-items: center;
//  justify-content: flex-end;
//  padding-right: 10px;
//  gap: 10px;
//  background-color: variables.$black;
//  border-radius: 10px;
//  margin-left: 0px;
//
//  &__field {
//    width: 196px;
//    border: 0;
//    background: variables.$black;
//    color: variables.$white;
//    font-size: 12px;
//    line-height: 14.63px;
//
//    &:focus {
//      outline: none;
//    }
//  }
//}

.wrapper {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 14px;
  //float: right;
  //margin-right: 537px;
  //margin-top: 50px;
  //height: auto;
  position: absolute;
  top: 115px;
  right: 25px;
}

.paper {
  flex-direction: column;
  display: flex;
  row-gap: 14px;
  //float: right;
  //margin-top: 360px;
  //margin-right: -41px;
  //height: auto;
  position: absolute;
  top: 420px;
  right: 25px;
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
}

.container {
  height: 100vh;
  overflow: hidden;
  margin-left: 360px;

  @include media(tablet) {
    margin-left: 0;
    overflow: scroll;
  }
}

.Home {
  top: 40px;
  margin-left: 32;
}

.card {
  width: 100px;
  height: 50px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  row-gap: 19px;
}


::-webkit-scrollbar {
  display: none;
}

.buttons {
  display: flex;
  gap: 10px;
  padding: 0 10px 0 10px;
  margin: 10px 0 10px;
  margin-top: 40px;
  margin-left: -9px;
  flex-wrap: wrap;
  width: 320px;
}


.active {
  font-weight: bold;
  color: white;
}


.input {
  box-sizing: border-box;
  width: 260px;
  height: 40px;
  background-color: variables.$classicgrey;
  border-radius: 10px;
  padding: 21px;
  border-style: none;
  color: white;
  border: 0.5px solid #EAEAEA;


  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
}

.arrow {
  background-color: variables.$black;
  border-radius: 20px 20px 0 0;
  border-style: none;
  padding: 3px 0 2px;

  &.click {
    .svg {
      fill: white;
      stroke: white;
      transform-origin: 50% 50%;
      transform: scaleY(-1);
    }
  }
}

.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: rotate(90deg);
  margin-top: -91px;
  margin-left: -100px;
  margin-right: -570px;
}

.blocks {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 35px auto 0;
  width: 330px;

  &__block {
    width: 330px;
    height: 60px;
    background-color: variables.$backgroung;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-decoration: none;
  }

  &__text {
    max-width: 270px;
    color: variables.$white;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    font-weight: 500;
    font-size: 16px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 650px;
  margin: 135px auto 0;

  @include media(tablet) {
    margin: 0 auto 20px;
  }

  @include media(mobile) {
    display: none;
  }

  &__title {
    color: variables.$white;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }

  &__text {
    color: variables.$white;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
  }
}
</style>