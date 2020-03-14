<template>
  <div class="container_main">
    <div>
      <logo />
      <h1 class="title">
        ESBO
      </h1>
      <h2 class="subtitle">
        My striking Nuxt.js project
      </h2>
      <div class="links">
        <div  v-if="!$auth.loggedIn">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--green"
          >
            GitHub
          </a>
          <nuxt-link
            to="/login"
            class="button--green"
          >
            Login
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link
            to="/about"
            class="button--green"
          >
            About
          </nuxt-link>
          <nuxt-link
            to="/esbo-page"
            class="button--green"
          >
            ESBO
          </nuxt-link>
          <a
            class="button--grey"
            @click="logout()"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style>
.container_main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
