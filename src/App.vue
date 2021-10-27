<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Akuma-Phawx Portfolio';
      },
    },
  },
};
</script>

<style></style>
