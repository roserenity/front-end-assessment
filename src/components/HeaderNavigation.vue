<script>
import { mdiMenu } from "@mdi/js";
export default {
  props: ["headerBtn", "links"],
  data() {
    return {
      mdiMenu: mdiMenu,
    };
  },
  methods: {
    toggleMenu() {
      if (document.getElementById("header-links").style.display == "block") {
        document.getElementById("header-links").style.display = "none";
      } else document.getElementById("header-links").style.display = "block";
    },
  },
};
</script>

<template>
  <div id="header-navigation" class="flex">
    <img alt="educat logo" class="logo" src="@/assets/logo.png" />
    <svg
      id="navigation-menu"
      @click="toggleMenu"
      viewBox="0 0 25 25"
      role="button"
    >
      <path :d="mdiMenu" />
    </svg>
    <section id="header-links" role="navigation">
      <div v-for="link in links" :key="link.title">
        <a :href="link.url"> {{ link.title }} </a>
      </div>
      <button id="header-btn" class="text-white bg-mantis">
        {{ headerBtn }}
      </button>
    </section>
  </div>
</template>

<style scoped>
#header-navigation {
  padding: 0 5% 0 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#header-links {
  display: block;
  width: 60%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#header-btn {
  border: none;
  padding: 0 3%;
}
#navigation-menu {
  display: none;
}
@media screen and (max-width: 425px) {
  #header-navigation {
    padding-bottom: 5%;
    position: relative;
  }
  .logo {
    width: 50%;
  }
  #links {
    display: flex;
    flex-direction: column;
  }
  #header-links {
    display: none;
    position: absolute;
    background-color: var(--clr-dark-gray);
    padding: 5%;
    text-align: center;
    top: 70%;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  a {
    color: white;
  }
  #navigation-menu {
    display: block;
    float: right;
  }
  svg {
    width: 10%;
    height: auto;
    fill: var(--clr-indigo);
    border-radius: 10%;
  }
  svg:hover {
    cursor: pointer;
  }
}
</style>
