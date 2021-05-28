<template>
  <left-right :is-img-left="true">
    <template v-slot:image>
      <div class="slider">
        <vue-slick-carousel v-bind="carouselSettings">
          <figure>
            <img
              src="~/assets/seife-in-form-einer-hochzeitstorte.jpg"
              alt="Seife in Form einer Hochzeitstorte"
              class="max-w-full"
            />
            <figcaption class="text-base">
              Seife für eine Hochzeit als Erinnerung für die Gäste
            </figcaption>
          </figure>
          <figure>
            <img
              src="~/assets/individuelle-seife-nach-kundenwunsch.jpg"
              alt="Individuell nach Kundenwunsch angepasste Seife"
            />
            <figcaption class="text-base">
              Geschenk für die Gäste eines Ferienhauses
            </figcaption>
          </figure>
        </vue-slick-carousel>
      </div>
    </template>
    <template v-slot:text>
      <section>
        <h1>Branding oder sonstige Spezialitäten</h1>
        <div class="mt-8">
          <p>
            Sucht deine Firma ein Kunden- oder Mitarbeitergeschenk? Brauchst du
            noch eine Seife für deinen Event?
          </p>
          <p class="mt-2">
            Gerne stellt Misspoppy's Handmade auf Kundenwunsch individuell
            angepasste Signaturseifen her. Dabei können verschiedenste Aspekte
            der Seife, wie z.B. Duft, Farben und Label individuell angepasst
            werden. Ebenso möglich ist die Erstellung eines indvidiuellen
            Stempels, um z.B. das Firmenlogo in der Seife eingraviert zu haben.
          </p>
        </div>
      </section>
    </template>
  </left-right>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import LeftRight from "./LeftRight";

export default {
  components: { LeftRight, VueSlickCarousel },
  data() {
    return {
      carouselSettings: {
        dots: true,
        slidesToShow: 1,
        infinite: true,
        centerMode: false,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 5000
      }
    };
  }
};
</script>

<style scoped lang="postcss">
.slider {
  max-width: 300px;
}

@screen md {
  .slider {
    @apply max-w-2/3;
  }
}
</style>
