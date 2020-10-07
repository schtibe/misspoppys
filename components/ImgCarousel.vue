<template>
  <div class="py-10 bg-pink">
    <vue-slick-carousel v-bind="settings" class="container">
      <div class="carousel-image">
        <img src="~/assets/carousel-images/pumpkin-spice.jpg" />
      </div>
      <div class="carousel-image">
        <img src="~/assets/carousel-images/granola.jpg" />
      </div>
      <div class="carousel-image">
        <img src="~/assets/carousel-images/schnitt.jpg" />
      </div>
      <div class="carousel-image">
        <img src="~/assets/carousel-images/camouflage.jpg" />
      </div>
      <div class="carousel-image">
        <img src="~/assets/carousel-images/granola-block.jpg" />
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
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
