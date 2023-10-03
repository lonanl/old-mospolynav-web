<template>
  <div class="accordion">
    <template v-for="campus in campuses" :key="campus">
      <div class="accordion__item">
        <button class="accordion__button" @click="choose">{{ campus.name }}</button>
        <ul class="accordion__list">
          <li v-for="item in campus.corpuses" :key="item" class="accordion__list-item">
            <!-- <NuxtLink :to='"/map?campus=\"" + campus.short_name + "\"&corpus=\"" + item.split(" ")[1] + "\""' class="accordion__list-text">{{ item }} -->
            <NuxtLink :to="{ path: 'map', query: { campus: campus.short_name, corpus: item.split(' ')[1] } }"
              class="accordion__list-text">{{ item }}
            </NuxtLink>
          </li>

        </ul>
      </div>
    </template>
    <div class="accordion__item_alone">
      <NuxtLink to="/map?campus='ПК'" class="accordion__link">ул. Павла Корчагина д. 22 (ПК)</NuxtLink>
    </div>
    <div class="accordion__item_alone">
      <NuxtLink to="/map?campus='М'" class="accordion__link">ул. Михалковская д. 7 (М)</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campuses: [
        {
          name: "ул. Большая Семеновская д. 38 \n (А, Б, В, Н, НД)",
          corpuses: ["Корпус А", "Корпус Б", "Корпус В", "Корпус Н", "Корпус НД"],
          short_name: "БС",
          short_corpuses: ["А", "Б", "В", "Н", "НД"]

        },
        {
          name: "ул. Автозаводская д. 16 (АВ)",
          corpuses: ["Корпус 1", "Корпус 2", "Корпус 3", "Корпус 4", "Корпус 5"],
          short_name: "АВ",
          short_corpuses: ["1", "2", "3", "4", "5"]
        },
        // {
        //     name: "ул. Павла Корчагина д. 22 (ПК)",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"],
        //     short_name: "ПК",
        // },
        {
          name: "ул. Прянишникова, 2А (ПР)",
          corpuses: ["Корпус 1", "Корпус 2"],
          short_name: "ПР",
          short_corpuses: ["1", "2"]
        },
        // {
        //     name: "ул. Михалковская д. 7 (М)",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"],
        //     short_name: "М",
        // },
        // {
        //     name: "ул. Садовая-Спасская, д. 6",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"]
        // },
      ]
    }
  },
  methods: {
    choose(event) {
      if (this.activeButton != null && this.activeButton != event.currentTarget && this.activeButton.classList.contains("active")) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    },
  }
}
</script>
<style lang="scss" scoped>
@use "../assets/scss/abstract/variables";
@use "../assets/scss/abstract/mixins" as *;

.accordion {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  @include media(tablet) {
    margin: 20px;
    column-gap: 20px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    //display: grid;
    //grid-template-columns: repeat(2, calc((100% - 60px) / 2));
    //grid-template-rows: repeat(3, auto);
    //grid-auto-flow: column;
    //gap: 20px;
  }

  &__link {
    color: variables.$white;
    text-decoration: none;
    font-size: 16px;
    line-height: 19.5px;
    width: 100%;
    text-align: center;
    padding-top: 20.25px;
    padding-bottom: 20.25px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @include media(tablet) {
      //width: 50%;
    }

    &_alone {
      background-color: variables.$backgroung;
      width: 100%;
      box-shadow: 0px 8px 9px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;

      @include media(tablet) {
        //width: 50%;
      }
    }
  }

  &__button {
    width: 100%;
    padding: 10px 0;
    background: variables.$backgroung;
    box-shadow: 0px 8px 9px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 60px;
    border: none;
    font-size: 16px;
    line-height: 19.5px;
    color: variables.$white;
    z-index: 90;
    cursor: pointer;
    white-space: pre;


    &.active~.accordion__list {
      height: auto;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 0;
    overflow: hidden;
    width: 100%;
    padding-top: 10px;
    background-color: variables.$darkgrey;
    //z-index: -1;
    border-radius: 0 0 10px 10px;
    position: relative;
    top: -10px;
    box-shadow: 0px 8px 9px rgba(0, 0, 0, 0.25);
  }

  &__list-item {
    width: 320px;
  }

  &__list-text {
    padding: 10px;
    text-decoration: none;
    color: variables.$white;
    display: block;
    //width: 300px;
  }
}
</style>