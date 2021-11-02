<template>
  <div
    id="contact"
    class="
      container
      flex flex-col
      justify-center
      text-center
      items-center
      max-w-full
      font-comfortaa
    "
  >
    <form
      class="
        shadow-2xl
        px-16
        py-8
        lg:px-64
        flex flex-col
        rounded
        w-full
        lg:w-max
      "
    >
      <!-- Intro -->
      <div class="py-4">
        <p class="font-bold text-4xl">Get in Touch</p>
        <p class="mt-4 text-sm text-blue-500 font-bold flex flex-col">
          <span> Would you like to work together or ask my something? </span>
          <span>
            Send me a message and I will get back to you as soon as possible.
          </span>
        </p>
      </div>
      <!-- Name -->
      <div class="mt-16 flex items-center">
        <label for="fullName" class="mr-4 w-1/3">Full Name</label>
        <input id="fullName" type="text" class="border shadow-md p-2 w-2/3" />
      </div>
      <!-- Email -->
      <div class="mt-4 flex items-center">
        <label for="email" class="mr-4 w-1/3">Email</label>
        <input id="email" type="email" class="border shadow-md p-2 w-2/3" />
      </div>
      <!-- Message -->
      <div class="mt-4 flex items-center">
        <label for="message" class="mr-4 w-1/3">Message</label>
        <textarea
          name="message"
          id="message"
          class="border shadow-md p-1 w-2/3"
          rows="8"
        ></textarea>
      </div>
      <!-- Button -->
      <!-- Button -->
      <div class="mt-6">
        <a class="custom-btn btn-7 text-center" href="#"><span>Send</span></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.custom-btn {
  width: 230px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 7 */
.btn-7 {
  background: linear-gradient(
    0deg,
    rgb(51, 203, 230) 0%,
    rgb(56, 142, 212) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: '';
  right: 0;
  bottom: 0;
  background: rgb(56, 142, 212, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7:before {
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: rgb(56, 142, 212, 1);
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  background: rgb(56, 142, 212, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}
</style>
