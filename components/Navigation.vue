<template>
  <div class="bg-gray-700 flex flex-col sm:flex-row justify-between px-3 py-2">
   <div class="flex justify-between">
      <div class="text-yellow-500">Tailwind CSS</div>
      <span class="material-icons text-gray-400 flex sm:hidden" @click="toggle">
        menu
      </span>
   </div>
    <div class="text-gray-400 my-2 sm:my-0 sm:flex flex-col sm:w-1/4 sm:flex-row sm:justify-between" :class="open ? 'flex' : 'hidden'">
      <nuxt-link to="/" class="">Home</nuxt-link>
      <nuxt-link to="/goods" class="">Goods</nuxt-link>
      <nuxt-link to="/about" class="">About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>