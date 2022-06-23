<script>
export default {
  props: ["learnMoreTitle", "learnMoreSubText", "catImg", "pawsImg"],
};
</script>

<template>
  <div id="learn-more-banner" class="bg-indigo text-white full-width flex">
    <img class="catImg" alt="cat img" :src="catImg" />
    <img class="pawsImg" alt="paws -mg" :src="pawsImg" />
    <h1 class="text-center">{{ learnMoreTitle }}</h1>
    <p class="subText text-center">{{ learnMoreSubText }}</p>
    <button class="button text-indigo bg-white"><p>LET'S TALK!</p></button>
  </div>
</template>
"
<style scoped>
button {
  padding: 2% 8% 2% 8%;
  margin-bottom: 5%;
  font-weight: bold;
}
#learn-more-banner {
  position: relative;
  padding: 3%;
  border-radius: 10px;
  margin-bottom: 5%;
  flex-direction: column;
  align-items: center;
}
#learn-more-banner > h1 {
  padding-bottom: 10px;
}
.catImg,
.pawsImg {
  position: absolute;
  z-index: 1;
  bottom: 0;
}
.catImg {
  left: 5%;
}
.pawsImg {
  right: 5%;
}
#learn-more-banner > p {
  padding: 0 25% 2% 25%;
  line-height: 30px;
  font-weight: regular;
}
@media screen and (max-width: 425px) {
  #learn-more-banner > p {
    padding: 2% 0;
  }
  button {
    margin-bottom: 20%;
  }
  .catImg,
  .pawsImg {
    width: 25%;
  }
}
</style>
