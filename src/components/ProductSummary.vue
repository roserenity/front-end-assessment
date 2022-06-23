<script>
export default {
  props: ["productSummaryTitle", "productSummarySubtext", "productList"],
};
</script>

<template>
  <div id="product-summary">
    <section id="product-summary-title-section">
      <p class="subText">{{ productSummarySubtext }}</p>
      <h1>{{ productSummaryTitle }}</h1>
    </section>
    <section>
      <div class="wrapper">
        <div
          class="product"
          v-for="product in productList"
          :key="product.title"
        >
          <div class="inner-wrapper">
            <img
              :src="product.photo"
              :alt="product.title"
              class="product-photo"
            />
          </div>
          <div class="inner-wrapper">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-decription">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#product-summary {
  padding: 5%;
}
#product-summary-title-section,
.wrapper {
  text-align: center;
  margin-bottom: 5%;
}
.subText {
  color: var(--clr-gray);
  letter-spacing: 5px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5%;
  padding: 5%;
}
.inner-wrapper {
  height: 50%;
  margin-bottom: 5%;
}
.product {
  text-align: center;
}
@media screen and (max-width: 425px) {
  #product-summary {
    margin-bottom: 20%;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>
