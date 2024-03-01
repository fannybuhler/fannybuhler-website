<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <ClientOnly>
      <div class="text-xs opacity-10 mt-12 text-center">
        Built: {{ useAppConfig().buildDate }}
      </div>
    </ClientOnly>
  </NuxtLayout>
</template>