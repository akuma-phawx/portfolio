<template>
  <div id="home" class="container flex flex-col justify-center max-w-full">
    <!-- Text -->
    <div class="mt-32 sm:mt-64">
      <h1 class="home-intro text-4xl md:text-5xl lg:text-7xl">
        <div class="upper-text">
          <span class="font-black">&lt;</span>
          <span class="text-shadow md:text-shadow-md lg:text-shadow-lg">
            Hi, I'm Christopher Vradis</span
          >
        </div>
        <div class="lower-text mt-4">
          <span class="text-shadow md:text-shadow-md lg:text-shadow-lg"
            >Full Stack Developer from Greece
          </span>
          <span class="font-black">/</span>
          <span class="font-black">&gt;</span>
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
