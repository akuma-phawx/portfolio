<template>
  <div
    id="nav"
    class="flex justify-between mb-12 pt-6 pb-6"
    :class="{ 'shadow-lg': !$store.getters.getMenuState }"
  >
    <LeftNavComponent />

    <RightNavComponent />
    <!-- Links -->
  </div>
  <MobileNavBar />
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

<style></style>
