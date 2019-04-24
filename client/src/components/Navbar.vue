<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <div v-if="!isLogin">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <router-link to="/login">Login</router-link>
          </button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <router-link to="/register">Register</router-link>
          </button>
        </div>
        <div v-else>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            @click.prevent="signout"
          >
            <router-link to="/">Logout</router-link>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isLogin: this.$store.state.isLogin
  //   }
  // },
  methods: {
    signout() {
      localStorage.removeItem('token')
    }
  },

  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
};
</script>

<style>
</style>
