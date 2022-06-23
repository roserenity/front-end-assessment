<script setup>
import HeaderView from "@/views/HeaderView.vue";
import ProductView from "@/views/ProductView.vue";
</script>

<template>
  <header>
    <HeaderView />
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <body>
    <ProductView />
  </body>
</template>

<style>
@import "@/assets/base.css";

a {
  text-decoration: none;
}

.subText {
  font-family: "Noto Serif", serif;
}
</style>
