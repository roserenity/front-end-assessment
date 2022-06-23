<script>
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
  props: ["productPromoTitle", "productPromoDetails"],
  directives: {
    scroll,
  },
  methods: {
    handleScroll(event, el) {
      let currentScrollPosition = window.pageYOffset;
      let element = document.getElementById("promo-details-div");
      let collection = document.getElementsByClassName("promo-text");
      if (currentScrollPosition > element.offsetTop - 100) {
        collection.item(0).classList.add("display");
        if (currentScrollPosition > collection.item(0).offsetTop) {
          collection.item(1).classList.add("display");
        }
      }
    },
  },
};
</script>

<template>
  <div id="product-promo" v-scroll="handleScroll">
    <h1 id="product-promo-title" class="text-center">
      {{ productPromoTitle }}
    </h1>
    <section id="promo-details-div">
      <div
        v-for="product in productPromoDetails"
        :key="product.title"
        role="list"
      >
        <div class="wrapper" role="list-item">
          <div class="promo-img" role="img">
            <img
              class="product-photo"
              :alt="product.title"
              :src="product.photo"
            />
          </div>
          <div
            class="promo-text text-left"
            :class="{ reverse: product.isReversed }"
          >
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#product-promo {
  padding: 5%;
}
#product-promo > h1 {
  margin-bottom: 5%;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%;
}
.reverse {
  order: -1;
}
.promo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  opacity: 0;
}
.promo-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-photo {
  width: 80%;
}
.display {
  transition: opacity 3s;
  opacity: 1;
}
@media screen and (max-width: 425px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 0%;
  }
  .product-photo {
    width: 50%;
  }
  .promo-text {
    text-align: center;
  }
  .reverse {
    order: 1;
  }
}
</style>
