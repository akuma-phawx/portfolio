<script setup lang="ts"></script>

<template>
  <div v-for="element in 50" class="snow"></div>
  <div
    class="container d-flex flex-column vh-100 align-items-center justify-content-center"
  >
    <h1 class="display-2 text-white">Christoforos Vradis</h1>
    <h5 class="display-6 text-white">Senior Frontend Developer</h5>
    <div id="links_container">
      <a href="https://github.com/akuma-phawx" target="_blank">
        <i class="bi bi-github text-white fs-4"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/christoforos-vradis-3b9a68151/"
        target="_blank"
      >
        <i class="bi bi-linkedin linkedin-color cursor-pointer fs-4 mx-4"></i>
      </a>
      <a href="https://www.instagram.com/chris.bd_sw/" target="_blank">
        <i class="bi bi-instagram instagram-gradient cursor-pointer fs-4"></i>
      </a>
    </div>
  </div>
</template>
