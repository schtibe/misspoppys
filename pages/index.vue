<template>
  <div class="border-box">
    <header>
      <hero-bar />
    </header>

    <main>
      <title-desc class="md:mt-24" @scrollTo="scrollTo" />

      <img-carousel class="md:mt-24" />

      <where-buy ref="whereBuy" class="md:mt-24" />

      <product-carousel ref="products" class="md:mt-24" />

      <product-carousel-body-lotions ref="products" class="md:mt-24" />

      <branding ref="branding" class="md:mt-24" />

      <!-- <properties ref="properties" class="md:mt-24" /> -->
    </main>

    <footer>
      <footer-section class="md:mt-24" />
    </footer>
  </div>
</template>

<script>
import HeroBar from "~/components/Hero.vue";
import TitleDesc from "~/components/TitleDesc.vue";
import ImgCarousel from "~/components/ImgCarousel.vue";
import FooterSection from "~/components/FooterSection.vue";
import ProductCarousel from "~/components/ProductCarousel.vue";
import ProductCarouselBodyLotions from "~/components/ProductCarouselBodyLotions.vue";
import WhereBuy from "~/components/WhereBuy.vue";
import Branding from "~/components/Branding.vue";
// import Properties from "~/components/Properties.vue";

export default {
  components: {
    HeroBar,
    TitleDesc,
    ImgCarousel,
    FooterSection,
    WhereBuy,
    ProductCarousel,
    Branding,
    ProductCarouselBodyLotions
    // Properties
  },
  mounted() {
    if (this.$route.hash) {
      this.$nextTick(() => {
        this.scrollTo("whereBuy");
      });
    }
  },
  methods: {
    scrollTo(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" });
    }
  },
  head: {
    title: "handgemachte und natürliche Seifen aus Bern von Miss Poppy's",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Handgemachte und natürliche Seifen aus Bern in der Schweiz. Unsere Seifen duften himmlisch, sehen köstlich aus und sind gut für deine Haut."
      }
    ],
    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    htmlAttrs: {
      lang: "de"
    }
  }
};
</script>

<style>
.banner {
  height: 600px;
}
</style>
