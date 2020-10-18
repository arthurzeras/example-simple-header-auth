<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
