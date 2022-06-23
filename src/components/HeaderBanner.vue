<script>
export default {
  props: ["bannerTitle", "bannerSubtext"],
};
</script>

<template>
  <div id="header-banner" class="flex">
    <section id="banner-texts">
      <h1 class="big">{{ bannerTitle }}</h1>
      <p class="subText">{{ bannerSubtext }}</p>
      <button class="button text-white bg-indigo">GO TO LMS PORTAL</button>
    </section>
    <section id="banner-img" role="img" label="banner photo with pulse effect">
      <div class="circle circular inner bg-light-yellow1"></div>
      <div class="circle circular outer1 bg-light-yellow1"></div>
      <div class="circle circular outer2 bg-light-yellow1"></div>
      <img
        alt="chat with us banner"
        class="full-width"
        src="@/assets/hero-banner.png"
      />
    </section>
  </div>
</template>

<style scoped>
button {
  padding: 2% 8% 2% 8%;
}
#header-banner {
  padding: 0 5% 0 5%;
  flex-direction: row;
  align-items: center;
}
#banner-img {
  position: relative;
  padding: 5%;
  width: 50%;
}
#banner-texts {
  width: 50%;
  text-align: left;
}
#banner-texts > h1 {
  font-weight: 800;
}
#banner-texts > p {
  padding: 3% 0;
}
.circle {
  position: absolute;
  animation: pulse 5s infinite;
}
.outer2 {
  top: 1%;
  left: 13%;
  z-index: -3;
  width: 84%;
  height: 92%;
  padding: 5%;
}
.outer1 {
  top: 4%;
  left: 16%;
  z-index: -2;
  width: 78%;
  height: 86%;
  padding: 5%;
}
.inner {
  z-index: -1;
  top: 7%;
  left: 19%;
  width: 72%;
  height: 80%;
}
@keyframes pulse {
  0% {
    background-color: var(--clr-light-yellow1);
  }
  50% {
    background-color: var(--clr-light-yellow2);
  }
  100% {
    background-color: var(--clr-light-yellow1);
  }
}
@media screen and (max-width: 425px) {
  #banner-texts {
    text-align: center;
    margin-bottom: 5%;
  }
  #banner-texts,
  #banner-img {
    width: 80%;
  }
  #banner-img {
    padding-top: 6%;
    padding-right: 10%;
  }
  .outer2 {
    left: 10%;
    top: -1%;
    height: 95%;
  }
  .outer1 {
    left: 13%;
    top: 2%;
    height: 89%;
  }
  .inner {
    left: 16%;
    top: 5%;
    height: 83%;
  }
  #header-banner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
