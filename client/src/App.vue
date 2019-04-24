<template>
  <div id="app">
    <Navbar :is-login="isLogin" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    Navbar
  },
  created() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      if(localStorage.getItem('token')) {
        this.$store.commit('successLogin', true)
        this.isLogin = this.$store.state.isLogin
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
