<template>
  <div class="relative text-black background">
    <img
      src="~/assets/header_blush.jpg"
      class="object-cover w-full h-screen max-w-none"
    />
    <div class="absolute inset-0 background" />
    <logo />
    <social-media />
    <div class="absolute w-full title">
      <h1 class="text-4xl md:text-6xl">
        Miss Poppy's Handmade
      </h1>
      <!-- <div class="text-2xl md:text-4xl">
        weitere Infos folgen bald hier
      </div> -->
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import SocialMedia from "~/components/SocialMedia.vue";

export default {
  components: {
    Logo,
    SocialMedia
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
  bottom: 40px;
  text-align: center;
}
</style>
