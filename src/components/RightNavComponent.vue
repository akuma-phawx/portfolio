<template>
  <div class="right-section flex flex-grow justify-end">
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
