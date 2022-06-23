<script>
export default {
  props: ["socmed", "pciIcon"],
};
</script>

<template>
  <div id="social-media-banner" class="flex-row">
    <div role="img" class="flex-row">
      <svg v-for="socmed in socmed" :key="socmed.name" viewBox="0 0 25 25">
        <path :d="socmed.icon" />
      </svg>
      <img :alt="pciIcon.name" :src="pciIcon.icon" />
    </div>
  </div>
</template>

<style scoped>
#social-media-banner {
  justify-content: center;
}
#social-media-banner > div {
  align-content: center;
  justify-content: space-evenly;
  width: 50%;
}
svg {
  width: 5%;
  height: auto;
  fill: var(--clr-indigo);
}
img {
  width: 4%;
}
@media screen and (max-width: 425px) {
  svg,
  img {
    width: 10%;
  }
  #social-media-banner > div {
    width: 70%;
  }
}
</style>
