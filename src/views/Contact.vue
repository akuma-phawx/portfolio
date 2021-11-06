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
      ref="form"
      @submit.prevent="sendEmail"
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
        <input
          id="fullName"
          name="fullName"
          v-model="fullName"
          placeholder="Your Name.."
          type="text"
          class="
            appearance-none
            border
            rounded
            outline-none
            shadow-md
            p-2
            w-2/3
            focus:ring-1 focus:ring-blue-500
          "
          required
        />
      </div>
      <!-- Email -->
      <div class="mt-4 flex items-center">
        <label for="email" class="mr-4 w-1/3">Email</label>
        <input
          id="email"
          name="email"
          v-model="email"
          placeholder="Your Email.."
          type="email"
          class="
            appearance-none
            border
            rounded
            outline-none
            shadow-md
            p-2
            w-2/3
            focus:ring-1 focus:ring-blue-500
          "
          required
        />
      </div>
      <!-- Message -->
      <div class="mt-4 flex items-center">
        <label for="message" class="mr-4 w-1/3">Message</label>
        <textarea
          name="message"
          id="message"
          v-model="message"
          placeholder="Your Message.."
          class="
            appearance-none
            border
            rounded
            outline-none
            shadow-md
            p-2
            w-2/3
            focus:ring-1 focus:ring-blue-500
          "
          rows="8"
          required
        ></textarea>
      </div>
      <!-- Button -->
      <div class="mt-6">
        <button
          class="animatedButton animatedButtonStyle text-center"
          type="submit"
        >
          <span>Send</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'Contact',
  data() {
    return {
      fullName: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          this.$refs.form,
          process.env.VUE_APP_USER_ID
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    },
    cleanInputs() {},
  },
};
</script>

<style scoped>
/* 7 */
.animatedButtonStyle {
  background: linear-gradient(
    0deg,
    rgb(51, 203, 230) 0%,
    rgb(56, 142, 212) 100%
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
  background: rgb(56, 142, 212, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.animatedButtonStyle:hover {
  color: rgb(56, 142, 212, 1);
  background: transparent;
}

.animatedButtonStyle span:before,
.animatedButtonStyle span:after {
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
</style>
