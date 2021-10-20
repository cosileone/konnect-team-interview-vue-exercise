<template>
  <div id="app">
    <TheTopNavBar />
    <router-view />
  </div>
</template>

<script>
import TheTopNavBar from '@/components/TheTopNavBar.vue'

export default {
  name: 'App',
  components: {
    TheTopNavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* { box-sizing: border-box; padding: 0; margin: 0; }

:root {
  --blue-500: #1456CB;
  --blue-300: #A6C6FF;
}

#app {
  color: rgba(0, 0, 0, 0.45);
  font-family: Roboto, 'sans-serif';
  font-style: normal;
  font-weight: normal;
  padding-bottom: 80px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
