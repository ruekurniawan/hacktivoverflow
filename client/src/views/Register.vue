<template>
  <div>
    <form @submit.prevent="submitRegister">
      <div class="form-group">
        <label for="exampleInputFullname">Fullname</label>
        <input v-model="name"
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter Fullname"
        >
      </div>
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
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitRegister() {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/register',
        data: {
          fullname: this.name,
          email: this.email,
          password: this.password
        }
      })
      .then(({data})=> {
        console.log('Sukses Registrasi')
        this.$router.replace('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
