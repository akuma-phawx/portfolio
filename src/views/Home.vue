<template>
  <div
    id="home"
    class="
      container
      flex flex-col
      justify-center
      max-w-full
      h-screen
      sm:mt-none
    "
  >
    <!-- Text -->
    <div class="z-10 mx-6">
      <h1 class="home-intro text-3xl md:text-5xl lg:text-7xl shadowCssCore">
        <div class="upper-text">
          <span class="font-black shadowCss">&lt;</span>
          <span class="homePageSpanStyle"> Hi, I'm Christopher Vradis</span>
        </div>
        <div class="lower-text mt-4">
          <span class="homePageSpanStyle"
            >Full Stack Developer from Greece
          </span>
          <span class="font-black blink shadowCss">/</span>
          <span class="font-black shadowCss">&gt;</span>
        </div>
      </h1>
    </div>
    <!-- Button -->
    <div class="mx-auto mt-16">
      <router-link
        class="animatedButton animatedButtonStyle text-center"
        to="/work"
        ><span>Here's my work &#8594;</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* 7 */
.animatedButtonStyle {
  background: linear-gradient(
    0deg,
    rgb(208, 73, 235) 0%,
    rgb(147, 45, 179) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
}

.animatedButtonStyle:before,
.animatedButtonStyle:after {
  position: absolute;
  content: '';
  right: 0;
  bottom: 0;
  background: rgb(147, 45, 179, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.animatedButtonStyle:hover {
  color: rgb(147, 45, 179, 1);
  background: transparent;
}

.animatedButtonStyle span:before,
.animatedButtonStyle span:after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  background: rgb(147, 45, 179, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
</style>
