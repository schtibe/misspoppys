<template>
  <div class="px-16 py-16 bg-green-eucalyptus">
    <div
      class="container flex flex-col items-center justify-between md:flex-row"
    >
      <div class="order-3 mt-10 text-center md:order-none md:text-left">
        <address class="not-italic">
          Miss Poppy's<br />
          Burgunderstrasse 86<br />
          3018 Bern
        </address>
      </div>

      <div class="order-2 md:order-none mt-8 md:mt-0">
        <!-- Begin Mailchimp Signup Form -->
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="https://misspoppys.us6.list-manage.com/subscribe/post?u=1f43e9f8301690c4520b9cc8a&amp;id=221f8de9bc"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate flex flex-col lg:flex-row"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL" class="font-normal">Newsletter</label>
              <input
                id="mce-EMAIL"
                type="email"
                value=""
                name="EMAIL"
                class="py-2 w-64 px-4"
                placeholder="E-Mail Adresse"
                required
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_1f43e9f8301690c4520b9cc8a_221f8de9bc"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear mt-2 lg:mt-0">
                <input
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="Anmelden"
                  name="subscribe"
                  class="bg-pink text-black py-2 px-4 hover:bg-pink-light cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
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

<style scoped lang="postcss">
#mc_embed_signup {
  width: 100%;
  font: inherit;

  & label {
    @apply font-normal;
    @apply text-xl;
  }
}
</style>
