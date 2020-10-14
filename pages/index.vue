<template>
  <div class="border-box">
    <hero />

    <title-desc class="mt-24" @scrollToWhereBuy="scrollToWhereBuy" />

    <img-carousel class="mt-24" />

    <where-buy ref="whereBuy" class="mt-24" />

    <footer-section class="mt-24" />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import TitleDesc from "~/components/TitleDesc.vue";
import ImgCarousel from "~/components/ImgCarousel.vue";
import FooterSection from "~/components/FooterSection.vue";
import WhereBuy from "~/components/WhereBuy.vue";

export default {
  components: {
    Hero,
    TitleDesc,
    ImgCarousel,
    FooterSection,
    WhereBuy
  },
  methods: {
    scrollToWhereBuy() {
      this.$refs.whereBuy.$el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
.banner {
  height: 600px;
}
</style>
