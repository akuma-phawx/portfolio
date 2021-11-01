<template>
  <div
    id="home"
    class="container flex flex-col justify-center max-w-full h-screen -mt-32"
  >
    <!-- Text -->
    <div class="">
      <h1 class="home-intro text-3xl md:text-5xl lg:text-7xl shadowCssCore">
        <div class="upper-text">
          <span class="font-black shadowCss">&lt;</span>
          <span
            class="text-shadow md:text-shadow-md lg:text-shadow-lg shadowCss"
          >
            Hi, I'm Christopher Vradis</span
          >
        </div>
        <div class="lower-text mt-4">
          <span
            class="text-shadow md:text-shadow-md lg:text-shadow-lg shadowCss"
            >Full Stack Developer from Greece
          </span>
          <span class="font-black blink shadowCss">/</span>
          <span class="font-black shadowCss">&gt;</span>
        </div>
      </h1>
    </div>
    <!-- Button -->
    <div class="mx-auto mt-16">
      <a
        href="#"
        class="
          bg-transparent
          border border-black
          text-black
          hover:bg-black hover:text-white
          text-center text-xl
          sm:text-2xl
          py-2
          px-4
          rounded
          w-max
          mt-8
          mx-auto
          transition
          duration-300
        "
      >
        Here's my work
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* shadowCssCore ------------------------------------------------------ */

.shadowCssCore {
  color: hsla(0, 0%, 0%, 0);
  perspective: 80px;
  outline: none;
}

/* shadowCss ------------------------------------------------------ */

.shadowCss {
  display: inline-block;
  text-shadow: rgb(150, 147, 147) 0 0 1px, #fff 0 -1px 2px, #fff 0 -3px 2px,
    rgba(0, 0, 0, 0.8) 0 30px 25px;
  transition: margin-left 0.3s cubic-bezier(0, 1, 0, 1);
}
</style>
