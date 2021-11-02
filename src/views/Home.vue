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
      <router-link class="custom-btn btn-7 text-center" to="/work"
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
    rgb(208, 73, 235) 0%,
    rgb(147, 45, 179) 100%
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
  background: rgb(147, 45, 179, 1);
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
  color: rgb(147, 45, 179, 1);
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
  background: rgb(147, 45, 179, 1);
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
