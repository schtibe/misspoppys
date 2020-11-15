<template>
  <div class="relative text-black background">
    <img
      ref="heroImage"
      src="~/assets/header_blush.jpg"
      class="object-cover w-full h-screen max-w-none"
    />
    <div class="absolute inset-0 background" />
    <logo />
    <div class="absolute w-full title">
      <h1 class="text-4xl md:text-6xl">
        Miss Poppy's Handmade
      </h1>
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
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

/* .title {
  bottom: 40%;
  text-align: center;
} */

.title {
  bottom: 100px;
  text-align: center;
}
</style>
