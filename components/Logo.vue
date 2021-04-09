<template functional>
  <img
    src="~/assets/logo.svg"
    class="absolute w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 logo-position"
    alt="Miss Poppy's Handmade Logo"
  />
</template>

<style>
.logo-position {
  left: calc(50% - 64px);
  top: 30px;
}

@screen md {
  /* .logo-position {
    left: 0px;
    right: 0px;
    margin: 0 auto;
    top: 80px;
  } */

  .logo-position {
    left: 80px;
    top: 80px;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
