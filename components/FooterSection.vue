<template>
  <div class="px-16 py-16 bg-green-eucalyptus">
    <div
      class="container flex flex-col items-center justify-between md:flex-row"
    >
      <div class="order-2 mt-10 text-center md:order-none md:text-left">
        <address class="not-italic">
          Miss Poppy's<br />
          Burgunderstrasse 86<br />
          3018 Bern
        </address>
      </div>

      <social-media class="order-1 md:order-none" />
    </div>
  </div>
</template>

<script>
import SocialMedia from "~/components/SocialMedia";

export default {
  components: {
    SocialMedia
  }
};
</script>
