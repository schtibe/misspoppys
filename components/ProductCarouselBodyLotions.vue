<template>
  <div class="px-10 py-8 md:py-16 bg-pink">
    <div class="container text-center">
      <h1>Sortiment Bodylotions</h1>
    </div>

    <vue-slick-carousel v-bind="settings" class="mt-12">
      <div
        v-for="product in products"
        :key="product.title"
        class="px-4"
        itemtype="http://schema.org/Product"
        itemscope
      >
        <meta itemprop="name" :content="product.title" />
        <link itemprop="image" :href="product.image" />
        <meta itemprop="description" :content="product.alt" />

        <div class="flex flex-col items-center justify-center ">
          <img :src="product.image" :alt="product.alt" />
          <h2 class="mt-4 md:mb-4">{{ product.title }}</h2>
          <product-details class="w-full md:pl-4" :product="product" />
        </div>

        <div itemprop="offers" itemtype="http://schema.org/Offer" itemscope>
          <meta itemprop="availability" content="https://schema.org/InStock" />
          <meta itemprop="priceCurrency" content="CHF" />
          <meta itemprop="price" content="9.50" />
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import ProductDetails from "./ProductDetails";

export default {
  components: { VueSlickCarousel, ProductDetails },
  data() {
    return {
      products: [
        {
          title: "Lime Colada",
          image: require("~/assets/body_lotions/handgemachte-solid-body-lotion-lime-collada.jpg"),
          scent: "Koskos und Limette, wie ein Longdrink am Strand",
          vegan: "Vegan"
        },
        {
          title: "Purple Heaven",
          image: require("~/assets/body_lotions/handgemachte-solid-body-lotion-purple-heaven.jpg"),
          scent: "Vanille und Lavendel"
        },
        {
          title: "Glowpefruit",
          image: require("~/assets/body_lotions/handgemachte-solid-body-lotion-glowpefruit.jpg"),
          scent: "Grapefruit, zitrusig und frisch"
        },
        {
          title: "Sugar Plum Fairy",
          image: require("~/assets/body_lotions/handgemachte-solid-body-lotion-sugar-plum-fairy.jpg"),
          scent:
            "Zuckerwatte und Bonbonladen, alles was der Zahnarzt verbietet ;)"
        }
      ],
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        arrows: true,
        centerMode: true,
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
              centerMode: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1280,
            settings: {
              centerMode: false,
              slidesToShow: 3
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="postcss"></style>
