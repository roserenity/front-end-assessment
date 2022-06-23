<script>
import HeaderAnnouncement from "@/components/HeaderAnnouncement.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import HeaderBanner from "@/components/HeaderBanner.vue";
import { mdiArrowDown } from "@mdi/js";

export default {
  components: {
    HeaderAnnouncement,
    HeaderNavigation,
    HeaderBanner,
  },
  data() {
    return {
      announcement:
        "Covid 19 Response. No one should be left behind. Check out our different ways of helping schools and institutions during pandemic",
      bannerTitle: "The LMS that's built for your needs",
      bannerSubtext:
        "Experience seamless communication, easy data migration, and secured user management in one awesome platform",
      arrowDown: mdiArrowDown,
      headerBtn: "BOOK A DEMO",
      navigationLinks: [
        { title: "Home", url: "/#" },
        { title: "About Us", url: "/#" },
        { title: "Products", url: "/#" },
        { title: "Blogs", url: "/#" },
      ],
    };
  },
  methods: {
    scrollToProducts() {
      document.getElementById("product-summary").scrollIntoView();
    },
  },
};
</script>

<template>
  <HeaderAnnouncement :msg="announcement" />
  <HeaderNavigation :headerBtn="headerBtn" :links="navigationLinks" />
  <HeaderBanner :bannerTitle="bannerTitle" :bannerSubtext="bannerSubtext" />
  <div class="text-center">
    <svg
      @click="scrollToProducts"
      type="button"
      viewBox="0 0 25 25"
      role="button"
      class="bg-mantis circular"
    >
      <path :d="arrowDown" />
    </svg>
  </div>
</template>

<style scoped>
svg {
  width: 3%;
  height: auto;
  fill: white;
  padding: 1%;
}
@media screen and (max-width: 425px) {
  svg {
    width: 10%;
  }
}
</style>
