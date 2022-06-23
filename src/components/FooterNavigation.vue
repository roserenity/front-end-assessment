<script>
export default {
  props: ["copyright", "links", "educatLogoImg"],
};
</script>

<template>
  <div id="footer-navigation" class="flex">
    <img alt="educat logo" class="logo" src="@/assets/logo.png" />
    <p class="text-center">{{ copyright }}</p>
    <section id="footer-links" class="flex" role="navigation">
      <div v-for="link in links" :key="link.title" class="links">
        <a :href="link.url" role="link"> {{ link.title }} </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
#footer-navigation {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#footer-links {
  width: 50%;
  float: right;
  flex-direction: row;
  justify-content: space-evenly;
}

@media screen and (max-width: 1024px) {
  #footer-navigation,
  #footer-links {
    flex-direction: column;
    align-items: center;
  }
  #footer-navigation > p {
    order: 3;
    padding: 1%;
  }
  #footer-links {
    float: none;
  }
  .links {
    padding: 1%;
  }
}
</style>
