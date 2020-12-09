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
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Product - 1',
          price: 111,
          description: 'Description - 1',
        },
        {
          id: 2,
          name: 'Product - 2',
          price: 222,
          description: 'Description - 2',
        },
        {
          id: 3,
          name: 'Product - 3',
          price: 333,
          description: 'Description - 3',
        },
        {
          id: 4,
          name: 'Product - 4',
          price: 444,
          description: 'Description - 4',
        },
        {
          id: 5,
          name: 'Product - 5',
          price: 555,
          description: 'Description - 5',
        },
      ],
    }
  },
}
</script>