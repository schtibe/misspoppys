<template>
  <div class="px-10 py-16 bg-green-eucalyptus">
    <div class="container text-center">
      <h2>Sortiment</h2>
    </div>

    <vue-slick-carousel v-bind="settings" class="mt-12">
      <div v-for="product in products" :key="product.title" class="px-4">
        <div class=" flex flex-col justify-center items-center">
          <img :src="product.image" :alt="product.alt" />
          <h3 class="mb-4 mt-4">{{ product.title }}</h3>
          <div class="text-lg w-full">
            <div class="desc flex justify-left items-center">
              <svg-icon name="nose" class="w-6 h-6" />
              <div class="ml-2">{{ product.scent }}</div>
            </div>
            <div class="desc flex justify-left items-center mt-2">
              <svg-icon name="drop" class="w-6 h-6" />
              <div class="ml-2">{{ product.superfat }}</div>
            </div>
          </div>
        </div>
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
          superfat: "8%",
          alt:
            "Handgemachte Pumpkin Spice Latte Seife mit Duft nach Pumpkin Spice Latte"
        },
        {
          title: "One in a Melon",
          image: require("~/assets/products/one-in-a-melon.jpg"),
          scent: "Melone",
          alt: 'Handgemachte Seife "One in a Melon" mit Duft nach Melone'
        },
        {
          title: "Granola",
          image: require("~/assets/products/granola.jpg"),
          scent: "Honig und Hafer",
          alt: 'Handgemachte Seife "Granola" mit Duft nach Honig und Hafer'
        },
        {
          title: "Eucalypta",
          image: require("~/assets/products/eukalypta.jpg"),
          scent: "Eukalyptus",
          alt:
            'Handgemachte Seife "Eukalypta" mit Duft nach frischem Eukalyptus'
        },
        {
          title: "Blush",
          image: require("~/assets/products/blush.jpg"),
          alt: 'Handgemachte Seife "Blush"'
        },
        {
          title: "Neroli",
          image: require("~/assets/products/neroli.jpg"),
          alt: 'Handgemachte Seife "Neroli"'
        },
        {
          title: "Fresh Linen",
          image: require("~/assets/products/fresh_linen.jpg"),
          alt: 'Handgemachte Seife "Fresh Linen" mit Duft wie frische Wäsche'
        },
        {
          title: "Cherry Flower Power",
          image: require("~/assets/products/cherry_flower_power.jpg"),
          alt: 'Handgemachte Seife "Cherry Flower Power" mit Duft nach Kirschen'
        },
        {
          title: "Juicy Lavender",
          image: require("~/assets/products/juicy_lavender.jpg"),
          alt: 'Handgemachte Seife "Juicy Lavender" mit Duft nach Lavendel'
        },
        // {
        //   title: "Christmas Spice",
        //   image: require("~/assets/products/christmas_spice.jpg")
        // },
        {
          title: "Salted Grapefruit",
          image: require("~/assets/products/salted_grapefruit.jpg"),
          alt: 'Handgemachte Seife "Salted Grapefruit" mit Duft nach Grapefruit'
        },
        {
          title: "Camouflage",
          image: require("~/assets/products/camouflage.jpg"),
          alt: 'Handgemachte Seife "Camouflage"'
        }
      ],
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="postcss"></style>
