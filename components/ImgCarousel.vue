<template>
  <div class="px-10 py-10 bg-pink">
    <vue-slick-carousel v-bind="settings" class="">
      <div v-for="image in images" :key="image.src" class="carousel-image">
        <img :src="image.src" :alt="image.alt" />
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
        {
          src: require("~/assets/carousel-images/seife-pumpkin-spice.jpg"),
          alt: "Pumpkin Spice Seife auf Kürbis"
        },
        {
          src: require("~/assets/carousel-images/handgemachte-seife-liegt-auf-zitronen.jpg"),
          alt: "Seife auf Zitrone liegend"
        },
        {
          src: require("~/assets/carousel-images/camouflage-drei-seifen-aufeinander.jpg"),
          alt: "Drei Seifen aufeinander"
        },
        {
          src: require("~/assets/carousel-images/granola-seife-mit-hafer-und-honig.jpg"),
          alt: "Granola Seife mit einem Wirbel aus Hafer und einem Löffel Honig"
        },
        {
          src: require("~/assets/carousel-images/box-mit-vielen-handgemachten-seifen.jpg"),
          alt: "Eine Box mit vielen Seifen nebeneinander"
        },
        {
          src: require("~/assets/carousel-images/seifen-schneiden.jpg"),
          alt: "Frau, die eine Seife schneidet"
        },
        {
          src: require("~/assets/carousel-images/eukalyptus-seifen-stapel-mit-gravur.jpg"),
          alt: 'Ein Stapel von Seifen mit "Miss Poppy\'s" Gravur'
        },
        {
          src: require("~/assets/carousel-images/granola-seife-block.jpg"),
          alt: "Die Ecke vom der Granola-Seife am Block"
        },
        {
          src: require("~/assets/carousel-images/cupcake-seife.jpg"),
          alt: "Eine Seife in Form eines Cupcakes"
        }
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
              slidesToShow: 1
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
