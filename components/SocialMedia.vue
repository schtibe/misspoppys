<template functional>
  <div class="absolute flex justify-between w-24 md:w-40 social-media-position">
    <a href="mailto:info@misspoppys.ch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-10 h-10 stroke-current text-green-dark md:w-16 md:h-16 hover:text-gray-700"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        ></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
    <a
      href="https://www.instagram.com/misspoppys/"
      target="_blank"
      class="text-gray-500"
    >
      <svg
        class="w-10 h-10 stroke-current text-green-dark md:w-16 md:h-16 hover:text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
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
