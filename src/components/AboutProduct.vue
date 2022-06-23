<script>
let counters = document.querySelectorAll(".count");
const scroll = {
  mounted: (el, bind) => {
    let f = function (evt) {
      if (bind.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
};
export default {
  props: ["demographList"],
  directives: {
    scroll,
  },
  data() {
    return {
      defaultNum: "0000",
    };
  },
  methods: {
    randomNumberEvent(event, el) {
      let currentScrollPosition = window.pageYOffset;
      let element = document.getElementById("about-product");
      if (
        currentScrollPosition > element.offsetTop - 300 &&
        currentScrollPosition < element.offsetTop - 280
      ) {
        this.demographList.forEach((item) => {
          if (item.counter !== item.count) {
            let min = Math.ceil(0);
            let max = Math.floor(item.count);
            item.counter = Math.floor(Math.random() * (max - min + 1) + min);
          }
        });
      } else if (currentScrollPosition > element.offsetTop - 279) {
        this.demographList.forEach((item) => {
          item.counter = item.count;
        });
      }
    },
  },
};
</script>

<template>
  <div id="about-product" class="flex" v-scroll="randomNumberEvent">
    <section
      v-for="item in demographList"
      class="flex-column count"
      :key="item.name"
    >
      <h1 class="text-mantis">{{ item.counter }}</h1>
      <p>{{ item.name }}</p>
    </section>
  </div>
</template>

<style scoped>
#about-product {
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5%;
  margin-bottom: 5%;
}
#about-product > section {
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 425px) {
  #about-product {
    flex-direction: column;
  }
  #about-product > section {
    padding: 3% 0;
  }
}
</style>
