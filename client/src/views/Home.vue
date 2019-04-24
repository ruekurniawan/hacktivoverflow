<template>
  <div class="home">
    <div class="container w-75">
      <div class="border-bottom my-3">
        <h3 class="title">Top Questions</h3>
        <router-link to="/questions/ask">
          <button class="btn btn-md btn-primary btn-text my-3">
            <span>Ask Question</span>
          </button>
        </router-link>
      </div>
    </div>

    <div v-for="(question, index) in questions" :key="index" class="card mt-3">
      <div class="card-body d-flex">
        <div class="cp mr-3">
          <div class="answer">
            <h6>{{ question.answer.length }}</h6>answer
          </div>
        </div>
        <div>
          <router-link :to="{ name: 'Questions', params: {id: question._id }}">
            <h6>{{question.title}}</h6>
          </router-link>  
        </div>
      </div>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      questions: []
    };
  },
  methods: {
    getAllQuestion() {
      axios({
        method: "GET",
        url: `http://localhost:3000/quest`
      })
        .then(({ data }) => {
          console.log(data)
          this.questions = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getAllQuestion()
  }
};
</script>
