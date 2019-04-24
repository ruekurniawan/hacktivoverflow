<template>
  <div>
    <form @submit.prevent="submitLogin">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      this.$store.dispatch('submitLogin', {email: this.email, password: this.password})
      this.isLogin = this.$store.state.isLogin
      this.$router.replace('/')
    }
  }
};
</script>