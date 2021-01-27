<template>
  <div class="px-10 py-10 bg-pink">
    <vue-slick-carousel v-bind="settings" class="">
      <div v-for="image in images" :key="image" class="carousel-image">
        <img :src="image" />
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      images: [
        require("~/assets/carousel-images/pumpkin-spice.jpg"),
        require("~/assets/carousel-images/granola.jpg"),
        require("~/assets/carousel-images/box.jpg"),
        require("~/assets/carousel-images/schnitt.jpg"),
        require("~/assets/carousel-images/eukalyptus.jpg"),
        require("~/assets/carousel-images/granola-block.jpg"),
        require("~/assets/carousel-images/cupcake.jpg")
      ],
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        centerMode: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              arrows: false
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="postcss">
.carousel-image {
  @apply w-48;
  @apply px-4;
}
</style>
