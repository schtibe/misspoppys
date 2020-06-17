<template>
  <div class="relative background">
    <img
      src="~/assets/header_toffee.jpg"
      class="object-cover w-full h-screen max-w-none"
    />
    <div class="absolute inset-0 background" />
    <logo />
    <div class="absolute w-full title">
      <div class="text-4xl md:text-6xl">
        Handgemachte Seifen aus Bern
      </div>
      <div class="text-2xl md:text-4xl">
        weitere Infos folgen bald hier
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
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

.title {
  bottom: 40%;
  text-align: center;
}

@screen md {
  .title {
    bottom: 50px;
  }
}
</style>
