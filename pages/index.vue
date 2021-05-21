<template>
  <div class="border-box">
    <header>
      <hero />
    </header>

    <main>
      <title-desc class="md:mt-24" @scrollTo="scrollTo" />

      <img-carousel class="md:mt-24" />

      <where-buy ref="whereBuy" class="md:mt-24" />

      <product-carousel ref="products" class="md:mt-24" />

      <branding ref="branding" class="md:mt-24" />

      <properties ref="properties" class="md:mt-24" />
    </main>

    <footer>
      <footer-section class="md:mt-24" />
    </footer>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import TitleDesc from "~/components/TitleDesc.vue";
import ImgCarousel from "~/components/ImgCarousel.vue";
import FooterSection from "~/components/FooterSection.vue";
import ProductCarousel from "~/components/ProductCarousel.vue";
import WhereBuy from "~/components/WhereBuy.vue";
import Branding from "~/components/Branding.vue";

export default {
  components: {
    Hero,
    TitleDesc,
    ImgCarousel,
    FooterSection,
    WhereBuy,
    ProductCarousel,
    Branding,
    Properties
  },
  methods: {
    scrollTo(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" });
    }
  },
  head: {
    title: "Miss Poppy's - handgemachte Seifen aus Bern",
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
