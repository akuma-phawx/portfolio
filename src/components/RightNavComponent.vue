<template>
  <div class="right-section flex flex-grow justify-end">
    <div class="social-links sm:flex hidden sm:block">
      <a href="https://github.com/akuma-phawx" target="_blank" class="mr-3">
        <img src="../../public/svgs/github-brand.svg" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/christopher-vradis-3b9a68151/"
        target="_blank"
        class="mr-3"
      >
        <img src="../../public/svgs/linkedin-brand.svg" alt="" />
      </a>
      <a
        href="https://www.instagram.com/chris.vrd_sw/"
        target="_blank"
        class="mr-3"
      >
        <img src="../../public/svgs/instagram-brand.svg" alt="" />
      </a>
    </div>
    <Hamburger class="sm:hidden" />
  </div>
</template>

<script>
import Hamburger from './Hamburger.vue';
export default {
  components: {
    Hamburger,
  },
};
</script>

<style></style>
