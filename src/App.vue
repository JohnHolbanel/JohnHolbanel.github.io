<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';

export default {
  components: {
    'login-page': LoginPage,
  },

  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
