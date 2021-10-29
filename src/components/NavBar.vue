<template>
  <div id="nav" class="flex justify-between mb-12 pt-6 pb-6">
    <div class="left-section flex">
      <div class="title_container text-center flex ml-3 mr-8 text-xl">
        <p class="text-2xl font-cinzel ml-4">Akuma-Phawx</p>
      </div>
      <div class="link_container hidden afterMd:block">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/skills">Skills</router-link>
        <router-link class="nav-link" to="/work">My Work</router-link>
        <router-link class="nav-link" to="/contact">Contact</router-link>
      </div>
    </div>
    <div class="right-section flex flex-grow justify-end">
      <!-- Links -->
      <div class="social-links afterMd:flex hidden afterMd:block">
        <a href="https://github.com/akuma-phawx" class="mr-3">
          <img src="../../public/svgs/github-brand.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-vradis-3b9a68151/"
          class="mr-3"
        >
          <img src="../../public/svgs/linkedin-brand.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/chris.vrd_sw/" class="mr-3">
          <img src="../../public/svgs/instagram-brand.svg" alt="" />
        </a>
      </div>
      <Hamburger class="afterMd:hidden" />
    </div>
  </div>
  <MobileNavBar />
</template>

<script>
import Hamburger from './Hamburger.vue';
import MobileNavBar from './MobileNavBar.vue';
export default {
  name: 'Navbar',
  components: {
    Hamburger,
    MobileNavBar,
  },
};
</script>

<style scoped src="@/assets/css/navlink.css"></style>
