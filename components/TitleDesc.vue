<template>
  <div class="lg:container py-16">
    <div class="m-auto text-center px-16 lg:px-32">
      <h1 class="">einzigartige Seifen aus Bern</h1>

      <p class="mb-2">
        Miss Poppy's ist eine Seifenmanufaktur aus Bern. Miss Poppy's Seifen
        sind gut für das Wohlbefinden deiner Haut, duften himmlisch, sind
        allesamt handgemacht und für den täglichen Gebrauch geeignet. Die Seifen
        werden im traditionellen Verfahren hergestellt und sind lufgehärtet.
      </p>

      <p class="pt-2">
        Die Seifen enthalten kein Palmöl und keine unnötigen Zusatzstoffe wie
        Stabilisatoren oder Weichmacher und sind praktisch unverpackt und somit
        Plastikfrei.
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
        <a
          href="#"
          class="btn-link"
          @click.prevent="$emit('scrollTo', 'whereBuy')"
        >
          Die Seifen sind zur Zeit in einem Online-Shop und bei plus minus
          Lädeli in Bern erhältlich.
        </a>
      </p>
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
