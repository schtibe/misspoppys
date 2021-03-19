<template>
  <div class="border-box">
    <hero />

    <title-desc class="mt-24" @scrollToWhereBuy="scrollToWhereBuy" />

    <img-carousel class="mt-24" />

    <where-buy ref="whereBuy" class="mt-24" />

    <product-carousel class="mt-24" />

    <branding class="mt-24" />

    <footer-section class="mt-24" />
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
    Branding
  },
  methods: {
    scrollToWhereBuy() {
      this.$refs.whereBuy.$el.scrollIntoView({ behavior: "smooth" });
    }
  },
  head() {
    return {
      title: "Miss Poppy's Handmade - natürliche, handgemachte Seifen aus Bern",
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Miss Poppy's Handmade sind handgemachte Seifen auf natürlicher Basis hergestellt in Bern"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Seifen,Soap,Duschen,Händewaschen,Bern,handgemacht,natürlich,vegan,Kosmetik,handmade"
        }
      ]
    };
  }
};
</script>

<style>
.banner {
  height: 600px;
}
</style>
