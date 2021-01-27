<template>
  <div class="container py-16">
    <div class="m-auto text-center">
      <h2 class="text-2xl md:text-4xl">einzigartige Seifen aus Bern</h2>

      <div class="mt-4">Willkommen bei Miss Poppy's Handmade</div>
      <p class="mb-2">
        Miss Poppy's Seifen sind gut für deine Haut, duften himmlisch und sind
        allesamt in Bern handgemacht.
      </p>
      <p class="pt-2">
        Die Seifen enthalten kein Palmöl und keine unnötigen Zusatzstoffe wie
        Stabilisatoren oder Weichmacher.
      </p>
      <p>
        Alle Seifen haben einen hohen Rückfettungsanteil, was dem Austrocknen
        der Haut entgegen wirkt. Sie sind allesamt nicht nur für die Hände
        sondern auch herrvorragend zum Duschen geeignet!
      </p>

      <p>
        <button class="btn-link" @click="$emit('scrollToWhereBuy')">
          Überzeuge dich selbst!
        </button>
        Weitere Infos werden bald hier noch folgen.
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  @apply mt-2;
}
</style>
