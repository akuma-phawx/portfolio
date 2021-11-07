<template>
  <div
    class="mobile-menu text-center sm:hidden shadow-lg"
    :class="{ hidden: !$store.getters.getMenuState }"
  >
    <div class="mobile_link_container flex flex-col">
      <router-link class="nav-link nav-link nav-link-mobile mx-auto" to="/"
        >Home</router-link
      >
      <router-link class="nav-link nav-link-mobile mx-auto" to="/skills"
        >Skills</router-link
      >
      <router-link class="nav-link nav-link-mobile mx-auto" to="/about"
        >About</router-link
      >
      <router-link class="nav-link nav-link-mobile mx-auto" to="/work"
        >My Work</router-link
      >
      <router-link class="nav-link nav-link-mobile mx-auto" to="/contact"
        >Contact</router-link
      >
    </div>
    <div class="contact-links flex justify-center mt-5 mb-10">
      <a
        href="https://github.com/akuma-phawx"
        target="_blank"
        class="mr-3 mb-3"
      >
        <img src="../../public/svgs/github-brand.svg" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/christopher-vradis-3b9a68151/"
        target="_blank"
        class="mr-3 mb-3"
      >
        <img src="../../public/svgs/linkedin-brand.svg" alt="" />
      </a>
      <a
        href="https://www.instagram.com/chris.vrd_sw/"
        target="_blank"
        class="mb-3"
      >
        <img src="../../public/svgs/instagram-brand.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
// import LeftNavComponent from './LeftNavComponent.vue';
// import RightNavComponent from './RightNavComponent.vue';
export default {
  name: 'MobileNavBar',
  // components: {
  //   LeftNavComponent,
  //   RightNavComponent,
  // },
};
</script>

<style scoped src="@/assets/css/navlink.css"></style>
