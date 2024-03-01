<template>
  <Head>
    <Title>Fanny Buhlér</Title>
    <Meta
      name="description"
      content="A communicative and design driven frontend developer currently working at Made People."
    />
    <Meta name="og:image" content="/fanny-share.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0090" />
    <meta name="msapplication-TileColor" content="#ff0090" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
  <div class="grid gap-4 px-6">
    <Logo />
    <div class="fixed left-0 bottom-[15%] md:bottom-[20%] w-full px-6">
      <Intro />
      <Projects />
    </div>
    <Footer />
  </div>
</template>

<script setup>
//
</script>
