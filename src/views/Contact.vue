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
          <span> Would you like to work together or ask me something? </span>
          <span>
            Send me a message and I will get back to you as soon as possible.
          </span>
        </p>
      </div>
      <!-- Name -->
      <div class="mt-16 flex items-center">
        <label for="fullName" class="mr-4 w-1/3">Name</label>
        <input
          id="fullName"
          name="fullName"
          v-model="fullName"
          placeholder="Your Name.."
          type="text"
          class="inputStyle"
          required
          oninvalid="this.setCustomValidity('Name can not be left blank.')"
          oninput="this.setCustomValidity('')"
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
          class="inputStyle"
          oninvalid="this.setCustomValidity('Invalid Email Address.')"
          oninput="this.setCustomValidity('')"
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
          class="inputStyle"
          rows="8"
          oninvalid="this.setCustomValidity('Minimum message length is 15 characters.')"
          oninput="this.setCustomValidity('')"
          minlength="15"
          required
        ></textarea>
      </div>
      <!-- Button -->
      <div class="my-7 flex flex-col items-center">
        <button
          v-if="!isSending"
          class="animatedButton animatedButtonStyle text-center"
          type="submit"
        >
          <span>Send</span>
        </button>

        <div v-else class="loadingSpinner my-6"></div>
      </div>
    </form>
    <!-- Loading Spinner -->
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
      isSending: false,
    };
  },
  methods: {
    sendEmail() {
      this.isSending = true;
      emailjs
        .sendForm(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          this.$refs.form,
          process.env.VUE_APP_USER_ID
        )
        .then(
          () => {
            this.isSending = false;
            this.cleanInputs();
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    },
    cleanInputs() {
      this.message = this.fullName = this.email = '';
    },
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

@keyframes load7 {
  100% {
    transform: rotatez(360deg);
  }
}

.loadingSpinner {
  width: 100px;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingSpinner::before {
  content: '';
  color: white;
  height: 50px;
  width: 50px;
  background: transparent;
  border-radius: 50%;
  border: 10px solid blue;
  border-color: #2ea4e9 #2ea4e9 #2ea4e9 #76e6f5;
  animation: load7 0.6s infinite ease-in-out;
  box-shadow: 0px 0px 40px -2px skyblue;
}
</style>
