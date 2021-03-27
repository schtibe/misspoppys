<template>
  <div class="text-lg">
    <div
      v-for="prop in properties"
      :key="prop.icon"
      class="desc flex justify-left items-center"
    >
      <div class="text-gray-800">
        <svg-icon :name="prop.icon" class="w-6 h-6" :title="prop.title" />
      </div>
      <div class="ml-2">{{ prop.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    properties() {
      const keys = ["scent", "superfat", "vegan"];
      const icons = { scent: "nose-alt", superfat: "drop", vegan: "vegan" };
      const titles = {
        scent: "Duftnoten",
        superfat: "Rückfettungsanteil",
        vegan: "Vegane Zutaten"
      };

      return keys
        .filter((key) => {
          return key in this.product;
        })
        .map((key) => {
          return {
            value: this.product[key],
            icon: icons[key],
            title: titles[key]
          };
        });
    }
  }
};
</script>
