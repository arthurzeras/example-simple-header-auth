<template>
  <section class="login">
    <form @submit.prevent="authenticate()">
      <input type="password" v-model="password" placeholder="password">
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    password: '',
  }),

  methods: {
    ...mapActions(['ACTION_STORE_TOKEN']),

    async authenticate() {
      try {
        await this.ACTION_STORE_TOKEN(this.password);
      } catch (error) {
        console.error('password invalid', error);
      }
    }
  }
}
</script>

<style>

</style>
