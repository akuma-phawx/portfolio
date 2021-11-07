<template>
  <div class="mt-20">
    <div
      id="nav"
      class="nav-menu"
      :class="{ 'border-b': !$store.getters.getMenuState }"
    >
      <LeftNavComponent />

      <RightNavComponent />
    </div>
    <MobileNavBar class="mob-menu z-50" />
  </div>
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

<style scoped></style>
