<script>
// update to dynamic
import partner1 from "@/assets/Partners/partner1.png";
import partner2 from "@/assets/Partners/partner2.png";
import partner3 from "@/assets/Partners/partner3.png";
import partner4 from "@/assets/Partners/partner4.png";
import partner5 from "@/assets/Partners/partner5.png";
import partner6 from "@/assets/Partners/partner6.png";

export default {
  data() {
    return {
      partnersTitle: "Our Partners",
      partnersSubtext: "OUR HAPPY CLIENTS",
      partnerList: [partner1, partner2, partner3, partner4, partner5, partner6],
    };
  },
};
</script>

<template>
  <div id="partners-view">
    <section id="partners-view-title-section" class="text-center">
      <p class="subText text-gray">{{ partnersSubtext }}</p>
      <h1>{{ partnersTitle }}</h1>
    </section>
    <div id="partners-banner" class="flex-row">
      <div role="img" class="flex-row">
        <img
          v-for="(partner, index) in partnerList"
          class="partner-logo"
          :key="index"
          :alt="index"
          :src="partner"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#partners-view {
  padding: 5%;
}
#partners-view-title-section {
  margin-bottom: 5%;
}
.subText {
  letter-spacing: 5px;
}
#partners-banner {
  justify-content: center;
}
#partners-banner > div {
  align-content: center;
  justify-content: space-evenly;
  width: 85%;
}
.partner-logo {
  filter: grayscale(1);
}
.partner-logo:hover {
  filter: none;
  transition: 1s;
}
@media screen and (max-width: 425px) {
  #partners-banner > div {
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
  }
  #partners-view {
    margin-bottom: 5%;
  }
  .partner-logo {
    width: 30%;
    height: 20%;
    margin: 5%;
  }
}
</style>
