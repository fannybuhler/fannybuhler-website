<template>
  <div class="-mr-6 flex justify-end">
    <div class="ml-10 md:ml-0 text-xs md:text-lg w-full md:max-w-[55vw]">
      <div class="mb-3 font-medium">Recent Projects</div>
      <div class="border-b border-b-black" @mouseleave="active = 0">
        <a
          class="flex items-center border-t border-t-black py-3 pr-3 md:pr-6 group transition duration-500"
          :class="[0, 1].includes(active) ? 'text-black' : 'text-black/20'"
          href="https://minirodini.com"
          target="_blank"
          @mouseover="active = 1"
        >
          <div class="w-[35%] md:w-2/5">Mini Rodini</div>
          <div class="flex-1">www.minirodini.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 group-hover:scale-125 origin-left group-hover:text-hotpink transition duration-300"
          />
        </a>
        <a
          class="flex items-center border-t border-t-black py-3 pr-3 md:pr-6 group transition duration-500"
          :class="[0, 2].includes(active) ? 'text-black' : 'text-black/20'"
          href="https://astridlindgren.com"
          target="_blank"
          @mouseover="active = 2"
        >
          <div class="w-[35%] md:w-2/5">Astrid Lindgren</div>
          <div class="flex-1">www.astridlindgren.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 group-hover:scale-125 origin-left group-hover:text-hotpink transition duration-300"
          />
        </a>
        <a
          class="flex items-center border-t border-t-black py-3 pr-3 md:pr-6 group transition duration-500"
          :class="[0, 3].includes(active) ? 'text-black' : 'text-black/20'"
          href="https://rohnisch.com"
          target="_blank"
          @mouseover="active = 3"
        >
          <div class="w-[35%] md:w-2/5">Röhnisch</div>
          <div class="flex-1">www.rohnisch.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 group-hover:scale-125 origin-left group-hover:text-hotpink transition duration-300"
          />
        </a>
        <a
          class="flex items-center border-t border-t-black py-3 pr-3 md:pr-6 group transition duration-500"
          :class="[0, 4].includes(active) ? 'text-black' : 'text-black/20'"
          href="https://oascompany.com"
          target="_blank"
          @mouseover="active = 4"
        >
          <div class="w-[35%] md:w-2/5">OAS</div>
          <div class="flex-1">www.oascompany.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 group-hover:scale-125 origin-left group-hover:text-hotpink transition duration-300"
          />
        </a>
        <a
          class="flex items-center border-t border-t-black py-3 pr-3 md:pr-6 group transition duration-500"
          :class="[0, 5].includes(active) ? 'text-black' : 'text-black/20'"
          href="https://eqpestore.com"
          target="_blank"
          @mouseover="active = 5"
        >
          <div class="w-[35%] md:w-2/5">Skistar EQPE</div>
          <div class="flex-1">www.eqpestore.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 group-hover:scale-125 origin-left group-hover:text-hotpink transition duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script async setup>
const active = ref(0);
</script>
