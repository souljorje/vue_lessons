<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <form action="#" class="form">
                  <div class="form-group">
                    <label for="Username">Username</label>
                    <input id='Username' type="text" class="form-control" v-model="user.userName">
                  </div>
                  <div class="form-group">
                    <label for="Mail">Mail</label>
                    <input id='Mail' type="text" class="form-control" v-model="user.email">
                  </div>
                  <button
                    class="btn btn-primary"
                    @click.prevent="submit">Submit
                  </button>
                  <hr>
                  <button
                    class="btn btn-primary"
                    @click.prevent="fetchData">Fetch
                  </button>
                  <ul class="list-group">
                    <li class="list-group-item"
                      v-for="(user, index) in users"
                      :key="index">
                      {{ user.userName }} – {{ user.email }}
                    </li>
                  </ul>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          users: [],
          user: {
            userName: '',
            email: '',
          }
        }
      },
      methods: {
        submit() {
          this.$http.post('https://vue-http-test-a1b2.firebaseio.com/data.json', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error)
            });
        },
        fetchData() {
          this.$http.get('https://vue-http-test-a1b2.firebaseio.com/data.json')
            .then(response => {
              return response.json();
            })
            .then(data => {

              for (let user in data) {
                console.log(user)
                this.users.push(data[user]);
              }
            })
        }
      }
    }
</script>

<style>
</style>
