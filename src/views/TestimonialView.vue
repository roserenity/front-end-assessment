<script>
import { mdiFormatQuoteOpen } from "@mdi/js";
import testimonial from "@/assets/testimonial.png";

export default {
  data() {
    return {
      testimony:
        "Scuola Maria is fortunate to work with PCI early on when the pandemic hit the country. My ideas and my curriculum design all came to life in the NEST — our exclusive LMS for our students. If not for PCI, we wouldn't be able to continue education at this very difficult time.",
      photo: testimonial,
      name: "Ina Gonda-Ramos, MAE-CDE, LPT",
      position: "Program Director of Scuola Maria",
      quote: mdiFormatQuoteOpen,
    };
  },
};
</script>

<template>
  <div id="testimonial-view" class="full-width flex bg-light-vivid-orange">
    <div id="testimony" class="flex-column">
      <h1>They said it first</h1>
      <svg class="top" viewBox="0 0 25 25">
        <path :d="quote" />
      </svg>
      <div>
        <p>{{ testimony }}</p>
      </div>
      <section>
        <p>{{ name }}</p>
        <p>{{ position }}</p>

        <section class="flex-row">
          <div class="switch circular"></div>
          <div class="switch circular"></div>
        </section>
      </section>
      <svg class="bottom" viewBox="0 0 25 25">
        <path :d="quote" />
      </svg>
    </div>

    <div id="photo-div" class="flex">
      <img alt="client-photo" class="client-photo" :src="photo" />
      <div class="circle-container">
        <div class="circle bg-vivid-orange"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#testimonial-view {
  padding: 0 0 0 5%;
  flex-direction: row;
}
#testimony {
  width: 60%;
  justify-content: space-evenly;
  padding: 3% 0;
}
#testimony > * {
  padding: 3% 0;
}
#testimonial-view,
#testimony {
  position: relative;
}
#photo-div {
  position: relative;
  width: 40%;
  justify-content: center;
}
.client-photo {
  width: 50%;
}
svg {
  width: 10%;
  height: auto;
  position: absolute;
  z-index: -1;
  fill: var(--clr-mid-vivid-orange);
}
.top {
  top: 25%;
  left: -5%;
}
.bottom {
  bottom: 20%;
  right: 0%;
}
.circle-container {
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: clip;
}
.circle {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 80%;
  top: 33%;
  left: 5%;
  border-radius: 50%;
}
.switch {
  padding: 0.5%;
  margin: 0.5%;
}
.switch:first-child {
  background-color: var(--clr-vivid-orange);
}
.switch:last-child {
  background-color: var(--clr-black);
}
@media screen and (max-width: 768px) {
  #testimonial-view {
    flex-direction: column;
    padding: 0 5%;
  }
  #testimony,
  #photo-div {
    width: 100%;
  }
  .client-photo {
    width: 30%;
  }
  .circle {
    left: 23%;
    width: 50%;
  }
  .top {
    top: 15%;
    left: -18px;
  }
  .bottom {
    bottom: 20%;
  }
  .switch {
    padding: 1%;
    margin: 1%;
  }
}
</style>
