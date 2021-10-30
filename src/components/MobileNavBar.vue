<template>
  <div
    class="mobile-menu text-center sm:hidden"
    :class="{ hidden: !$store.getters.getMenuState }"
  >
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
