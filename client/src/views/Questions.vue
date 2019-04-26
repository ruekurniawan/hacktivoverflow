<template>
  <div class="container">
    <form @submit.prevent="submitQuestion">
      <div class="form-group">
        <label for="exampleFormControlInput1">Title</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description Question</label>
          <textarea class="form-control" rows="3" v-model="description"></textarea>
        </div>
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
      title: '',
      description: ''
    }
  },
  methods: {
    submitQuestion() {
      console.log('masuk ')
      axios({
        method: 'POST',
        url: `http://localhost:3000/quest`,
        data: {
          title: this.title,
          description: this.description
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        console.log('Add Question Success')
        this.$router.replace('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
};
</script>

<style>
</style>
