<template>
  <left-right :is-img-left="true">
    <template v-slot:image>
      <img
        src="~/assets/individuelle-seife-nach-kundenwunsch.jpg"
        class="w-2/3"
        alt="Individuell nach Kundenwunsch angepasste Seife"
      />
    </template>
    <template v-slot:text>
      <section>
        <h1>Branding</h1>
        <div class="mt-8">
          <p>
            Sucht deine Firma ein Kunden- oder Mitarbeitergeschenk?
          </p>
          <p class="mt-2">
            Gerne stellt Misspoppy's Handmade auf Kundenwunsch individuell
            angepasste Signaturseifen her. Dabei können verschiedenste Aspekte
            der Seife, wie z.B. Duft, Farben und Label individuell angepasst
            werden. Ebenso möglich ist die Erstellung eines indvidiuellen
            Stempels, um z.B. das Firmenlogo in der Seife eingraviert zu haben.
          </p>
          <p class="mt-2">
            Bei Interesse kannst du dich gerne unter
            <a href="mailto:info@misspoppys.ch">info@misspoppys.ch</a> melden!
          </p>
        </div>
      </section>
    </template>
  </left-right>
</template>

<script>
import LeftRight from "./LeftRight";

export default {
  components: { LeftRight }
};
</script>
