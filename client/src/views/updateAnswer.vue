<template>
  <div>
    <form>
      <div class="form-group">
        <!-- <input type="text" class="form-control" {{answer.title}}>  </input> -->
      </div>
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description Answer</label>
          <textarea class="form-control" rows="3" v-model="description"></textarea>
        </div>
        <!-- {{answer._id}} -->
        <div>
          <button type="submit" class="btn btn-primary" @click.prevent="editAnswer">Edit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      description: ''
    }
  },
  methods: {
    editAnswer() {
      let id = this.$route.params.id
      axios({
        method: 'PUT',
        url: `http://localhost:3000/answer/${id}`,
        headers: {
          token: localStorage.getItem("token")
        },
        data: {
          description: this.description
        }
      })
      .then(({ data }) => {
        console.log(data)
        console.log("Sukses Update Data");
        this.$router.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
};
</script>

<style>
</style>
