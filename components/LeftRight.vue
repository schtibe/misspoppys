<template>
  <div
    class="container flex flex-col md:flex-row items-center justify-evenly py-16"
  >
    <div
      class="flex items-center justify-center md:w-1/2 order-2 mt-10 md:mt-0"
      :class="{ 'md:order-1': isImgLeft, 'md:order-2': !isImgLeft }"
    >
      <slot name="image" />
    </div>
    <div
      class="md:w-1/2 order-1 text-center md:text-left"
      :class="{ 'md:order-2': isImgLeft, 'md:order-1': !isImgLeft }"
    >
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isImgLeft: {
      type: Boolean,
      default: true
    }
  }
};
</script>
