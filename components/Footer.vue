<template>
  <div class="fixed bottom-0 left-0 w-full px-6 md:px-12 py-4 md:py-6">
    <div
      class="text-center flex items-center justify-center md:justify-between text-xs md:text-sm"
    >
      <div class="hidden md:block">
        © 2024
        <ClientOnly>
          <span class="text-xs opacity-0 hover:opacity-20">
            Built: {{ useAppConfig().buildDate }}
          </span>
        </ClientOnly>
      </div>
      <div class="flex items-center gap-4 md:gap-12">
        <a
          class="transition duration-300 hover:text-[#FF0090]"
          href="mailto:fanny.buhler1@gmail.com"
        >
          [ email ]
        </a>
        <a
          class="transition duration-300 hover:text-[#FF0090]"
          href="https://www.linkedin.com/in/fanny-buhler"
          target="_blank"
        >
          [ linkedin ]
        </a>
        <a
          class="transition duration-300 hover:text-[#FF0090]"
          href="https://open.spotify.com/user/1132908801?si=fd6b115c7caa468f"
          target="_blank"
        >
          [ spotify ]
        </a>
        <a
          class="transition duration-300 hover:text-[#FF0090]"
          href="https://www.instagram.com/fannyvafan"
          target="_blank"
        >
          [ instagram ]
        </a>
      </div>
    </div>
  </div>
</template>

<script async setup>
//
</script>
