<template>
  <div class="relative text-black background">
    <img
      ref="heroImage"
      srcset="
        ~/assets/header/handgemachte-seife-aus-bern-cinnamon-bun.jpg       1900w,
        ~/assets/header/handgemachte-seife-aus-bern-cinnamon-bun-small.jpg 1280w
      "
      sizes="(max-width: 768px) 1280px, 1900px"
      src="~/assets/header/handgemachte-seife-aus-bern-cinnamon-bun.jpg"
      class="object-cover w-full h-screen max-w-none"
      alt="Handgemachte Seife aus Bern"
    />
    <div class="absolute inset-0 background" />
    <logo />
    <div class="absolute w-full title">
      <div key="hero-title" class="text-4xl md:text-6xl">
        Miss Poppy's Handmade
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  mounted() {
    const heroImage = this.$refs.heroImage;
    heroImage.style.height = window.innerHeight;
  }
};
</script>

<style>
.background {
  /* background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.2) 100%
  ); */
}

/* .title {
  bottom: 40%;
  text-align: center;
} */

.title {
  bottom: 50px;
  text-align: center;
}
</style>
