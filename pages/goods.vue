<template>
  <div class="mx-auto mt-12 w-4/6 sm:w-88">
    <GoodsListItem
      v-for="item of list"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :description="item.description"
    />
  </div>
</template>

<script>
import GoodsListItem from '@/components/GoodsListItem'
export default {
  components: { GoodsListItem },
  computed:{
    list(){
      return this.$store.state.list
    }
  }
 
  }
</script>