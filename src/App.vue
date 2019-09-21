<template>
  <div id="app" data-theme="default">
    <transition>
      <Navigation />
    </transition>
    <div class="content">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import "./assets/scss/main.scss";
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  transition: all 0.16s ease-in-out;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  overflow: hidden;
}

.content {
  width: 100%;
  position: relative;
  z-index: 0;

  & > div {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.slide-enter-active {
  animation: slideFromBottom 0.5s ease-in;
}

.slide-leave-active {
  animation: slideToTop 0.3s ease-in;
}

@keyframes slideFromBottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideToTop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
