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
                  <div class="form-group">
                    <input class="form-control"  type="text" v-model="node">
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
          },
          resource: {},
          node: 'data'
        }
      },
      methods: {
        submit() {
          // this.$http.post('data.json', this.user)
          //   .then(response => {
          //     console.log(response);
          //   }, error => {
          //     console.log(error)
          //   });
          this.resource.saveAlt(this.user);
        },
        fetchData() {
          // this.$http.get('data.json')
          //   .then(response => {
          //     return response.json();
          //   })
          //   .then(data => {

          //     for (let user in data) {
          //       console.log(user)
          //       this.users.push(data[user]);
          //     }
          //   })
          this.resource.getData({node: this.node})
            .then(response => {
                return response.json();
              })
            .then(data => {
              for (let user in data) {
                console.log(user)
                this.users.push(data[user]);
              }
            });
        }
      },
      created() {
        const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'},
        };
        this.resource = this.$resource('{node}.json', {},  customActions);
      }
    }
</script>

<style>
</style>
