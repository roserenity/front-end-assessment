<script>
import { mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import LearnMoreBanner from "@/components/LearnMoreBanner.vue";
import SocialMediaBanner from "@/components/SocialMediaBanner.vue";
import FooterNavigation from "@/components/FooterNavigation.vue";
import pciLogoIcon from "@/assets/pci-social.png";
import catImg from "@/assets/cat.svg?url";
import pawsImg from "@/assets/paws.svg?url";
import educatLogoImg from "@/assets/logo.png";

export default {
  components: {
    SocialMediaBanner,
    FooterNavigation,
    LearnMoreBanner,
  },
  data() {
    return {
      learnMoreTitle: "Want to see what Educat can do for you?",
      learnMoreSubText:
        "Learn more by booking a demo today and discover why Educat is the only platform you'll ever need for your learning and training needs.",
      catImg: catImg,
      pawsImg: pawsImg,
      socmed: [
        { name: "facebook-icon", icon: mdiFacebook, url: "/#" },
        { name: "instagram-icon", icon: mdiInstagram, url: "/#" },
        { name: "twitter-icon", icon: mdiTwitter, url: "/#" },
      ],
      pciIcon: {
        name: "pci-icon",
        icon: pciLogoIcon,
        url: "/#",
      },
      copyright: "Ⓒ Copyright 2021. All rights reserved.",
      links: [
        { title: "About Us", url: "/#" },
        { title: "Products", url: "/#" },
        { title: "Shop", url: "/#" },
        { title: "Terms of Use", url: "/#" },
        { title: "Data Privacy", url: "/#" },
      ],
      educatLogoImg: educatLogoImg,
    };
  },
};
</script>

<template>
  <LearnMoreBanner
    :learnMoreTitle="learnMoreTitle"
    :learnMoreSubText="learnMoreSubText"
    :catImg="catImg"
    :pawsImg="pawsImg"
  />
  <SocialMediaBanner :socmed="socmed" :pciIcon="pciIcon" />
  <FooterNavigation
    :educatLogoImg="educatLogoImg"
    :copyright="copyright"
    :links="links"
  />
</template>
