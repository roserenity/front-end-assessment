<script setup>
import HeaderView from "@/views/HeaderView.vue";
import ProductView from "@/views/ProductView.vue";
import TestimonialView from "@/views/TestimonialView.vue";
import PartnersView from "@/views/PartnersView.vue";
import FooterView from "@/views/FooterView.vue";
</script>

<template>
  <header>
    <HeaderView />
  </header>
  <body>
    <ProductView />
    <TestimonialView />
    <PartnersView />
  </body>
  <footer>
    <FooterView />
  </footer>
</template>

<style>
@import "@/assets/base.css";

footer {
  padding: 5%;
}
</style>
