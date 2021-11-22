<template>
  <div>
    <div class="">
      &nbsp;
    </div>
    <div class="px-10 py-10 bg-pink">
      <vue-slick-carousel v-bind="settings" class="">
        <div v-for="image in images" :key="image.src" class="carousel-image">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </vue-slick-carousel>
    </div>
    <div class="">
      &nbsp;
    </div>
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
          src: require("~/assets/carousel-images/schneiden-handgemachter-seifen.jpg"),
          alt: "Schneiden von handgemachten Seifen"
        },
        {
          src: require("~/assets/carousel-images/handgemachte-seife-mit-salz.jpg"),
          alt: "Handgemachte Seife liegt in der Küche"
        },
        {
          src: require("~/assets/carousel-images/seifen-auf-tisch-aufgereiht.jpg"),
          alt: "Seifen auf einem Tisch aufgereiht"
        },
        {
          src: require("~/assets/carousel-images/granola-seife-mit-hafer-und-honig.jpg"),
          alt: "Granola Seife mit einem Wirbel aus Hafer und einem Löffel Honig"
        },
        {
          src: require("~/assets/carousel-images/handgemachte-seifen-im-koffer.jpg"),
          alt: "Seifen in einem Koffer ausgestellt"
        },
        {
          src: require("~/assets/carousel-images/seife-mit-beeren.jpg"),
          alt: "Seifen mit Himbeeren"
        },
        {
          src: require("~/assets/carousel-images/seifen-mit-lavendel.jpg"),
          alt: "Seifen mit Lavendel"
        },
        {
          src: require("~/assets/carousel-images/seifen-am-block-aufgereiht.jpg"),
          alt: "Verschiedene Seifen am Block aufgereiht"
        },
        {
          src: require("~/assets/carousel-images/zwei-cupcake-seifen.jpg"),
          alt: "Seifen in Form eines Cupcakes mit Streusel und Toppings"
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

.triangled-bottom {
  @apply bg-pink;
}

.triangled-bottom:before {
  @apply bg-white;
}

.triangled-top {
  @apply bg-pink;
}

.triangled-top:before {
  @apply bg-white;
}
</style>
