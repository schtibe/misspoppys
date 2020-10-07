<template>
  <div class="border-box">
    <hero />

    <title-desc class="mt-24" />

    <img-carousel class="mt-24" />

    <where-buy class="mt-24" />

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
  }
};
</script>

<style>
.banner {
  height: 600px;
}
</style>
