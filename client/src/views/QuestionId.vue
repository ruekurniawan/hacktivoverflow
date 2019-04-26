<template>
  <div class="container">
    <form>
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
      <button type="submit" class="btn btn-primary" @click.prevent="removeQuest">Delete</button>
      <button type="submit" class="btn btn-primary" @click.prevent="edit">Edit</button>
    </form>

    <!-- Answering -->
    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    <br>
    <h1>Answered</h1>
    <form v-for="(answer, index) in answered" :key="index">
      <div class="form-group">
        <!-- <input type="text" class="form-control" {{answer.title}}>  </input> -->
      </div>
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description Answer</label>
          <textarea class="form-control" rows="3">{{answer.description}}</textarea>
        </div>
        <!-- {{answer._id}} -->
        <div v-if="!userLogin">
          <button type="submit" class="btn btn-primary" @click.prevent="removeAnswer(answer._id)">Delete</button>
          <router-link :to="{ name: 'Answer', params: {id: answer._id }}">
            <button class="btn btn-primary">Edit</button>
          </router-link>  
        </div>
      </div>
    </form>

    <h1 class="center">Answering</h1>
    <form @submit.prevent="submitAnswer">
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description Answer</label>
          <textarea class="form-control" rows="3" v-model="descriptionAnswer"></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      answered: [],
      titleAnswer: "",
      descriptionAnswer: ""
    };
  },
  methods: {
    getOne(id) {
      axios({
        method: "GET",
        url: `http://localhost:3000/quest/${id}`,
        headers: { token: localStorage.getItem("token") }
      })
        .then(({ data }) => {
          (this.title = data.title), (this.description = data.description);
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit() {
      let id = this.$route.params.id;
      axios({
        method: "PUT",
        url: `http://localhost:3000/quest/${id}`,
        headers: { token: localStorage.getItem("token") },
        data: {
          title: this.title,
          description: this.description
        }
      })
        .then(({ data }) => {
          console.log("Sukses Update Data");
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeQuest() {
      // console.log('MASUK')
      let id = this.$route.params.id;
      axios({
        method: "DELETE",
        url: `http://localhost:3000/quest/${id}`,
        headers: { token: localStorage.getItem("token") }
      })
        .then(({ data }) => {
          console.log("Sukses Delete Data");
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAnswer() {
      // console.log(this);
      axios({
        method: "GET",
        url: `http://localhost:3000/answer`,
        headers: { token: localStorage.getItem("token") }
      })
        .then(({ data }) => {
          this.answered = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitAnswer() {
      console.log("masuk");
      axios({
        method: "POST",
        url: `http://localhost:3000/answer`,
        data: {
          title: this.titleAnswer,
          description: this.descriptionAnswer
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          console.log("Add Answer Success");
          this.$router.replace(`/`);
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeAnswer(id) {
      // console.log(id)
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/answer/${id}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(({ data }) => {
          console.log("Sukses Delete Data");
          this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
    }, 
  },
  created() {
    // console.log(this.$route.params.id)
    this.getOne(this.$route.params.id);
    this.getAnswer();
  },
  computed: {
    userLogin() {
      // console.log(this.$store.state.userLogin)
      return this.$store.state.userLogin
    }
  },
};
</script>

<style>
</style>
