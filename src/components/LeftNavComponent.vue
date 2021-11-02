<template>
  <div class="left-section flex">
    <div class="logo-section sm:hidden hover:animate-bounce">
      <router-link to="/">
        <img
          src="../../public/favicon-32x32.png"
          class="object-contain h-8 ml-6"
          alt=""
      /></router-link>
    </div>
    <div class="link_container hidden sm:block ml-8 mt-1">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/skills">Skills</router-link>
      <router-link class="nav-link" to="/work">My Work</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="@/assets/css/navlink.css"></style>
