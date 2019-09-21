<template>
  <div id="app" data-theme="default">
    <transition>
    <Navigation />
    </transition>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/scss/main.scss";
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation,
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  transition: all 0.16s ease-in-out;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
}
</style>
