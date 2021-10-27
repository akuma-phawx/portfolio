<template>
  <div id="nav" class="flex justify-between mb-12 pt-6 pb-6">
    <div class="title_container text-center ml-3 text-xl">
      <p>yōkoso</p>
    </div>
    <div class="link_container hidden md:block">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/skills">Skills</router-link>
      <router-link class="nav-link" to="/work">My Work</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
    </div>
    <Hamburger class="md:hidden" />
  </div>
</template>

<script>
import Hamburger from './Hamburger.vue';
export default {
  name: 'Navbar',
  components: {
    Hamburger,
  },
};
</script>

<style scoped src="@/assets/css/navlink.css"></style>
