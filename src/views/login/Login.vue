<template>
  <section class="login">
    <input type="password" v-model="password" placeholder="password">
  </section>
</template>

<script>
export default {
  data: () => ({
    password: '',
  }),

  methods: {
    authenticate() {
      console.log(this.password);
    }
  }
}
</script>

<style>

</style>
