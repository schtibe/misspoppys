<template>
  <div class="px-10 py-16 bg-green-eucalyptus">
    <div class="container text-center">
      <h2>Sortiment</h2>
    </div>

    <vue-slick-carousel v-bind="settings" class="mt-12">
      <div
        v-for="product in products"
        :key="product.title"
        class="carousel-image"
      >
        <img :src="product.image" />
        <div class="mb-4">
          <h3>{{ product.title }}</h3>
        </div>
        <!-- <div class="desc">Duft: {{ product.scent }}</div>
        <div class="desc">Rückfettungsanteil: {{ product.superfat }}</div> -->
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
      products: [
        {
          title: "Pumpkin Spice Latte",
          image: require("~/assets/products/pumpkin_spice_latte.jpg"),
          scent: "Pumpkin Spice Latte Kaffee",
          superfat: "8%"
        },
        {
          title: "One In a Melon",
          image: require("~/assets/products/one-in-a-melon.jpg")
        },
        {
          title: "Granola",
          image: require("~/assets/products/granola.jpg"),
          scent: "Honig und Hafer"
        },
        {
          title: "Eukalypta",
          image: require("~/assets/products/eukalypta.jpg"),
          scent: "Eukalyptus"
        },
        {
          title: "Blush",
          image: require("~/assets/products/blush.jpg")
        },
        {
          title: "Neroli",
          image: require("~/assets/products/neroli.jpg")
        },
        {
          title: "Cherry Flower Power",
          image: require("~/assets/products/cherry_flower_power.jpg")
        },
        {
          title: "Christmas Spice",
          image: require("~/assets/products/christmas_spice.jpg")
        },
        {
          title: "Salted Grapefruit",
          image: require("~/assets/products/salted_grapefruit.jpg")
        }
      ],
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        arrows: true,
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
  @apply flex flex-col;
  @apply text-center;

  & :nth-child(2) {
    @apply mt-4;
  }
}

.desc {
  @apply text-lg;
}
</style>
