<template>
  <Head>
    <Title>Fansan</Title>
    <Meta name="description" content="asdasd" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0090" />
    <meta name="msapplication-TileColor" content="#ff0090" />
    <meta name="theme-color" content="#ffffff" />
    <!-- <Meta name="og:image" content="" /> -->
  </Head>
  <div class="grid gap-4 px-6">
    <div class="w-12 md:w-20 fixed top-0 left-6">
      <div class="aspect-square bg-pink-500 p-4">
        <!-- <AtomIcon class="w-4" name="fanny-logo" /> -->
      </div>
    </div>

    <!-- Content -->
    <div class="fixed left-0 bottom-[20%] w-full px-6">
      <!-- Intro -->
      <div class="grid gap-2 mb-8 md:mb-24 md:w-full md:max-w-[50vw] mx-auto">
        <h1 class="font-medium text-xl md:text-5xl">Fanny Buhler</h1>
        <p class="text-sm md:text-lg max-w-lg">
          A communicative and design driven frontend developer currently working
          at Made People.
        </p>
      </div>

      <!-- Projects -->
      <div class="-mr-6 flex justify-end">
        <div class="text-xs md:text-lg w-full md:max-w-[55vw]">
          <div class="mb-3">Recent Projects</div>
          <div class="border-b border-b-black">
            <a
              class="block flex items-center border-t border-t-black py-3 pr-4"
              href="https://minirodini.com"
              target="_blank"
            >
              <div class="w-2/5">Mini Rodini</div>
              <div class="flex-1">https://minirodini.com</div>
              <AtomIcon class="w-4" name="arrow-right" />
            </a>
            <a
              class="block flex items-center border-t border-t-black py-3 pr-4"
              href="https://astridlindgren.com"
              target="_blank"
            >
              <div class="w-2/5">Astrid Lindgren</div>
              <div class="flex-1">https://astridlindgren.com</div>
              <AtomIcon class="w-4" name="arrow-right" />
            </a>
            <a
              class="block flex items-center border-t border-t-black py-3 pr-4"
              href="https://rohnisch.com"
              target="_blank"
            >
              <div class="w-2/5">Röhnisch</div>
              <div class="flex-1">https://rohnisch.com</div>
              <AtomIcon class="w-4" name="arrow-right" />
            </a>
            <a
              class="block flex items-center border-t border-t-black py-3 pr-4"
              href="https://oascompany.com"
              target="_blank"
            >
              <div class="w-2/5">OAS</div>
              <div class="flex-1">https://oascompany.com</div>
              <AtomIcon class="w-4" name="arrow-right" />
            </a>
            <a
              class="block flex items-center border-t border-t-black py-3 pr-4"
              href="https://eqpestore.com"
              target="_blank"
            >
              <div class="w-2/5">Skistar EQPE</div>
              <div class="flex-1">https://eqpestore.com</div>
              <AtomIcon class="w-4" name="arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="fixed bottom-0 left-0 w-full px-6 md:px-12 py-4 md:py-6">
      <div
        class="text-center flex items-center justify-center md:justify-between text-xs md:text-sm"
      >
        <div class="hidden md:block">© 2024</div>
        <div class="flex items-center gap-4">
          <a class="block" href="mailto:fanny.buhler1@gmail.com"> [ email ] </a>
          <a
            class="block"
            href="https://www.linkedin.com/in/fanny-buhler"
            target="_blank"
          >
            [ linkedin ]
          </a>
          <a
            class="block"
            href="https://open.spotify.com/user/1132908801?si=fd6b115c7caa468f"
            target="_blank"
          >
            [ spotify ]
          </a>
          <a
            class="block"
            href="https://www.instagram.com/fannyvafan"
            target="_blank"
          >
            [ instagram ]
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>
