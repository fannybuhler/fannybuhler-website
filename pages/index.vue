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
    <Logo />

    <div class="fixed left-0 bottom-[20%] w-full px-6">
      <Intro />

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

    <Footer />
  </div>
</template>

<script setup>
//
</script>
