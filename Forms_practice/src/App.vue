<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <form v-if="!formSubmitted">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Full Name"
                v-model="userData.fullName">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                v-model="userData.email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="userData.password">
            </div>
            <p>Store data? </p>
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="storeData"
                  value="yes"
                  :checked="userData.storeData"> Yes
              </label>
            </div>
            <div class="radio">
              <label>
                <input
                  type="radio"
                  name="storeData"
                  value="no"
                  :checked="!userData.storeData"> No
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-default"
              @click.prevent="formSubmitted = true">Submit</button>
          </form>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="formSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail:{{ userData.email }} </p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.storeData ? 'yes' : 'no' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        fullName: '',
        email: '',
        password: '',
        storeData: false,
      },
      formSubmitted: false,
    }
  }
};
</script>

<style>

</style>
