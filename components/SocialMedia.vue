<template functional>
  <div class="absolute flex justify-between w-24 md:w-40 social-media-position">
    <a href="mailto:info@misspoppys.ch">
      <img
        src="~/assets/mail.svg"
        class="w-10 h-10 fill-current text-green-dark md:w-16 md:h-16 hover:text-gray-800"
      />
    </a>
    <a href="https://www.instagram.com/misspoppys/" target="_blank">
      <img
        src="~/assets/instagram.svg"
        class="w-10 h-10 fill-current text-green-dark md:w-16 md:h-16 hover:text-gray-800"
      />
    </a>
  </div>
</template>

<style>
.social-media-position {
  right: 20px;
  top: 20px;
}

@screen md {
  .social-media-position {
    right: 80px;
    top: 80px;
  }
}
</style>
