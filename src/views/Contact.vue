<template>
  <div
    id="contact"
    class="
      container
      flex flex-col
      justify-center
      text-center
      max-w-full
      font-comfortaa
    "
  >
    <h2 class="font-bold text-6xl">Get in touch!</h2>
    <p class="text-sm">
      &lt; Do you have a question or you want to work together? / &gt;
    </p>
    <input type="text" class="bg-blue-200" />
    <input type="text " class="bg-red-200" />
    <input type="text" class="bg-yellow-200" />
    <button class="mt-16">Send E-mail</button>
    <h3 class="mt-16">or via:</h3>
    <div class="flex justify-center mt-4">
      <a
        href="https://www.linkedin.com/in/christopher-vradis-3b9a68151/"
        target="_blank"
        class="mr-3"
      >
        <img src="../../public/svgs/linkedin-brand.svg" alt="" />
      </a>
      <a href="https://www.instagram.com/chris.vrd_sw/" target="_blank">
        <img src="../../public/svgs/instagram-brand.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
