<template>
  <div class="nav" :class="{toggled}">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="nav__arrow" @click="toggle" :class="{toggled}">
      <span>></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      toggled: true
    };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    }
  }
};
</script>

<style lang="scss">
.nav {
  height: 100vh;
  width: auto;
  border-right: 1px solid var(--color-secondary);
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: var(--color-bg);

  &.toggled {
    transform: translateX(0);
  }

  .nav__arrow {
    width: 30px;
    height: 30px;
    background-color: cyan;
    color: red;
    position: absolute;
    top: calc(50% - 15px);
    right: -15px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s ease;

    &:before {
      content: '';
      width: 15px;
      height: 30px;
      background: var(--color-bg);
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>