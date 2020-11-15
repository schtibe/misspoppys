<template>
  <div class="flex justify-between px-16 py-16 bg-green-eucalyptus">
    <div class="container ">
      <address class="not-italic">
        Miss Poppy's<br />
        Burgunderstrasse 86<br />
        3018 Bern
      </address>
    </div>

    <social-media />
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
