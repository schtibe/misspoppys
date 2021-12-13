<template>
  <div class="py-16 lg:container">
    <div class="px-4 m-auto text-center sm:px-16 lg:px-32">
      <h1 class="">einzigartige Seifen aus Bern</h1>

      <p class="mb-2">
        Miss Poppy's ist eine Mikro-Seifensiederei aus Bern in der Schweiz. Miss
        Poppy's Seifen sind gut für das Wohlbefinden deiner Haut, duften
        himmlisch, sind allesamt handgemacht und für den täglichen Gebrauch
        geeignet. Die Seifen werden mit hochwertigen Ölen und Buttern im
        traditionellen Kaltverfahren hergestellt, von Hand geschnitten und
        werden mindestens 6 bis 8 Wochen luftgehärtet.
      </p>

      <p class="pt-2">
        Die Seifen sind frei von Palmöl, Stabilisatoren, Weichmacher, Silikone
        und weiteren unnötigen Zusatzstoffen und sind praktisch unverpackt und
        somit Plastikfrei. Die minimalistische Verpackung kann zudem recycelt
        werden.
      </p>

      <p>
        Alle Seifen haben einen hohen Rückfettungsanteil, was dem Austrocknen
        der Haut entgegen wirkt und somit die Seifen nebst der Reinigung auch
        pflegend wirken. Sie sind allesamt nicht nur für die Hände sondern auch
        herrvorragend zum Duschen geeignet!
      </p>

      <p>
        Nebst dem
        <a
          href="#"
          class="btn-link"
          @click.prevent="$emit('scrollTo', 'products')"
        >
          saisonalen Sortiment</a
        >
        können bei Misspoppy's auf Kundenwunsch auch
        <a href="#" @click.prevent="$emit('scrollTo', 'branding')"
          >individuell angepasste Seifen</a
        >
        bestellt werden.
      </p>

      <p>
        Wo du die Seifen kaufen kannst, findest du weiter unten unter
        <a
          href="#"
          class="btn-link"
          @click.prevent="$emit('scrollTo', 'whereBuy')"
        >
          Wo man uns kaufen kann
        </a>
      </p>

      <div class="mt-4">
        <p class="">
          <strong>Neu!</strong>
        </p>
        <p>
          Neu gibt es auch feste Bodylotion im Sortiment.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  @apply mt-2;
}

p:first-of-type {
  @apply mt-10;
}
</style>
