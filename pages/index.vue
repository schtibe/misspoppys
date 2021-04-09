<template>
  <div class="border-box">
    <hero />

    <title-desc class="md:mt-24" @scrollTo="scrollTo" />

    <img-carousel class="md:mt-24" />

    <where-buy ref="whereBuy" class="md:mt-24" />

    <product-carousel class="md:mt-24" />

    <branding class="md:mt-24" />

    <footer-section class="md:mt-24" />
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
    scrollTo(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" });
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
            "Miss Poppy's Handmade Seifen sind allesamt handgemacht, mit natürlichen Zutaten, in Bern"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Seifen,Duschen,Händewaschen,Bern,handgemacht,natürlich,vegan,Kosmetik,handmade,cruelty free,lokal"
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
