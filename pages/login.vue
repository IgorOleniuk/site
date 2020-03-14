<template>
  <div>
    <div class="container">
      <div class="form-group mt-3" style="width: 400px;">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="you@email.com" class="form-control">
      </div>
      <div class="form-group" style="width: 400px;">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" class="form-control">
      </div>
      <button type="button" class="form-control btn btn-primary" style="width: 400px;" @click="login()">
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then(() => {
        console.log(this.$auth.getToken())
      })
    }
  }
}
</script>
