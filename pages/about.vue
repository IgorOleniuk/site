<template>
  <div>
    <div class="ml-5">
      <h1
        class="text-center mt-3"
      >
        Welcome back {{ $auth.user.user.name }}
      </h1>
      {{ $auth.getToken('access') }}
      {{ $auth.getToken('Access') }}
      {{ $auth.getToken('access_token') }}
      {{ $auth.getToken('token') }}
      <nuxt-link
        to="/"
      >
        Main page
      </nuxt-link>
      <h1>Hello World</h1>
      <p>This is page for testing caching</p>
      <img src="/img/IMG_8827 copy.PNG" width="400px" height="300px" alt="Img">
    </div>
  </div>
</template>
