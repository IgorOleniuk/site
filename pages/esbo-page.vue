<template>
  <main class="container h-100">
    <nuxt-link
      to="/"
    >
      Main page
    </nuxt-link>
    <h1>
      Empire State Building
      <br>
      {{ $t('title') }}
    </h1>
    <fieldset>
      <legend>
        {{ $t('sortingExperiences.title') }}
      </legend>
      <ul>
        <li>
          {{ $t('sortingExperiences.optionsTitles.1') }}
        </li>
      </ul>
    </fieldset>
    <button
      class="btn btn-warning mb-5"
    >
      {{ $t('startButton') }}
    </button>
    <br>
    <div class="d-inline-flex">
      <button
        class="btn btn-dark mr-2"
        @click="changeLang('en')"
      >
        English
      </button> <br>
      <button
        class="btn btn-dark"
        @click="changeLang('it')"
      >
        Italiano
      </button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
  body {
    background-image: url("/img/esbo.jpeg");
  }
</style>
