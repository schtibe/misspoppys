<template>
  <div class="px-10 py-8 md:py-16 bg-green-eucalyptus">
    <div class="container text-center">
      <h1>Sortiment</h1>
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
          title: "Pumpkin Spice Latte",
          image: require("~/assets/soaps/handgemachte-seife-pumpkin-spice-latte.jpg"),
          scent: "Kürbis, Zimt, Gewürz und Nuss",
          superfat: "8%",
          alt:
            "Handgemachte Pumpkin Spice Latte Seife mit Duftnote Kürbis, Zimt, Gewürz und Nuss",
          vegan: "Vegan",
          info: "Mit Hafermilch und weisser Tonerde"
        },
        {
          title: "One in a Melon",
          image: require("~/assets/soaps/handgemachte-seife-one-in-a-melon.jpg"),
          scent: "Wassermelone",
          alt: 'Handgemachte Seife "One in a Melon" mit Duft nach Wassermelone',
          superfat: "7%",
          vegan: "Vegan"
        },
        {
          title: "Granola",
          image: require("~/assets/soaps/handgemachte-seife-granola.jpg"),
          scent: "Hafer, Milch, Honig und Mandeln",
          alt:
            'Handgemachte Seife "Granola" mit Duft nach Hafer, Milch, Honig und Mandeln',
          superfat: "7%",
          vegan: "Vegan",
          info: "Mit Hafermilch und weisser Tonerde"
        },
        {
          title: "Eucalypta",
          image: require("~/assets/soaps/handgemachte-seife-eucalypta.jpg"),
          scent: "Eukalyptus und Rosmarin, kühlend und erfrischend",
          alt:
            'Handgemachte Seife "Eukalypta" mit Duft nach erfrischenden und kühlendem Eukalyptus und Rosmarin',
          superfat: "7%",
          vegan: "Vegan",
          info: "100% natürliche Zutaten, mit weisser Tonerde"
        },
        // {
        //   title: "Blush",
        //   image: require("~/assets/soaps/handgemachte-seife-blush.jpg"),
        //   alt:
        //     'Handgemachte Seife "Blush" mit Duftnote Blumig, Vanille, Kokosnuss, Süss',
        //   scent: "Blumig, Vanille, Kokosnuss, Süss",
        //   superfat: "5%",
        //   info: "Mit Ziegenmilch und weisser Tonerde"
        // },
        {
          title: "Neroli",
          image: require("~/assets/soaps/handgemachte-seife-neroli.jpg"),
          alt: 'Handgemachte Seife "Neroli" mit Duft nach Orangenblüten',
          scent: "Orangenblüten, herb und süss zugleich",
          superfat: "6%",
          vegan: "Vegan",
          info: "mit weisser Tonerde"
        },
        {
          title: "Fresh Linen",
          image: require("~/assets/soaps/handgemachte-seife-fresh-linen.jpg"),
          alt:
            'Handgemachte Seife "Fresh Linen" mit Duft nach frischer Wäsche, Vanille, Zitrone und Zuckerwatte',
          scent: "Frische Wäsche, Vanille, Zitrone und Zuckerwatte",
          superfat: "5%",
          vegan: "Vegan"
        },
        {
          title: "Cherry Flower Power",
          image: require("~/assets/soaps/handgemachte-seife-cherry-flower-power.jpg"),
          alt:
            'Handgemachte Seife "Cherry Flower Power" mit Duft nach Kirschblüten',
          scent: "Kirschblüten, blumig",
          superfat: "6%",
          vegan: "Vegan",
          info: "Mit weisser Tonerde"
        },
        {
          title: "Juicy Lavender",
          image: require("~/assets/soaps/handgemachte-seife-juicy-lavender.jpg"),
          alt:
            'Handgemachte Seife "Juicy Lavender" mit Duft nach Lavendel und Zitrone',

          scent: "Lavendel und Zitrone",
          superfat: "6%",
          vegan: "Vegan",
          info: "100% natürliche Zutaten"
        },
        // {
        //   title: "Christmas Spice",
        //   image: require("~/assets/soaps/handgemachte-seife-christmas_spice.jpg")
        // },
        {
          title: "Salted Grapefruit",
          image: require("~/assets/soaps/handgemachte-seife-salted-grapefruit.jpg"),
          alt:
            'Handgemachte Seife "Salted Grapefruit" mit Duft nach Pink Grapefruit',
          scent: "Pink Grapefruit, Ingwer, Pfeffer, frisch",
          superfat: "8%",
          info: "Mit Milch"
        },
        {
          title: "Camouflage",
          image: require("~/assets/soaps/handgemachte-seife-camouflage.jpg"),
          alt:
            'Handgemachte Seife "Camouflage" mit maskulinem Duft nach Lorbeer, Tannennadel, Bergamotte, Tabak',
          scent: "Lorbeer, Tannennadel, Bergamotte, Tabak, maskulin",
          superfat: "8%",
          vegan: "Vegan"
        },
        {
          title: "Romanoff",
          image: require("~/assets/soaps/handgemachte-seife-romanoff.jpg"),
          alt: 'Handgemachte Seife "Romanoff"',
          scent: "Erdbeer und Vanille",
          superfat: "6%",
          vegan: "Vegan"
        },
        {
          title: "Lemonade",
          image: require("~/assets/soaps/handgemachte-seife-lemonade.jpg"),
          alt: 'Handgemachte Seife "Romanoff"',
          scent: "Zitronenlimonade",
          superfat: "6%",
          vegan: "Vegan",
          info: "Mit Meersalz"
        },
        {
          title: "Chuck Raspberry",
          image: require("~/assets/soaps/handgemachte-seife-chuck-raspberry.jpg"),
          alt: 'Handgemachte Seife "Chuck Raspberry"',
          scent: "Himbeere",
          superfat: "4%",
          vegan: "Vegan"
        }
      ],
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 5,
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
          },
          {
            breakpoint: 1280,
            settings: {
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
