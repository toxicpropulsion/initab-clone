<template>
  <div id="app" data-theme="default">
    <Home />
  </div>
</template>

<script>
import "./assets/scss/main.scss";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  transition: all 0.16s ease-in-out;
}
</style>
