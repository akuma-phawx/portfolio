<template>
  <div class="flex items-center">
    <button
      class="mobile-menu-toggler hamburger hamburger--collapse pb-0 pt-0"
      :class="{ 'is-active': $store.getters.getMenuState }"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  mounted() {
    const menuToggler = document.querySelector('button.mobile-menu-toggler');

    //When hamburger icon is clicked
    menuToggler.addEventListener('click', () => {
      this.$store.dispatch('toggleMenu', !this.$store.getters.getMenuState);
    });

    // menuToggler.addEventListener('mouseover', () => {
    //   menuToggler.classList.add('animate-spin-slow');
    // });
    // menuToggler.addEventListener('mouseleave', () => {
    //   menuToggler.classList.remove('animate-spin-slow');
    // });
  },
};
</script>

<style scoped>
.hamburger:focus,
.hamburger:active {
  outline: none;
  box-shadow: none;
}
</style>
