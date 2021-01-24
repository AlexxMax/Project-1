<template>
  <div
    class="bg-gray-300 flex flex-col p-2 text-sm mx-auto rounded-lg shadow-lg my-2 leading-4"
  >
    <span class="font-bold">{{ id }}</span>
    <span>{{ name }}</span>
    <span>{{ price }}</span>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    id: Number,
    name: String,
    price: Number,
    description: String,
  },
}
</script>
