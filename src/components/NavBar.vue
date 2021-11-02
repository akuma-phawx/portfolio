<template>
  <div id="nav" class="flex justify-between mb-12 pt-6 pb-6">
    <LeftNavComponent />

    <RightNavComponent />
    <!-- Links -->
  </div>
  <MobileNavBar class="mob-men" />
</template>

<script>
import MobileNavBar from './MobileNavBar.vue';
import LeftNavComponent from './LeftNavComponent.vue';
import RightNavComponent from './RightNavComponent.vue';
export default {
  name: 'Navbar',
  components: {
    MobileNavBar,
    LeftNavComponent,
    RightNavComponent,
  },
};
</script>

<style scoped>
.mob-men {
  position: absolute;
  background: white;
  z-index: 1000;
  width: 100%;
}
</style>
