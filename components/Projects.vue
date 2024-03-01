<template>
  <div class="-mr-6 flex justify-end">
    <div class="ml-6 md:ml-0 text-xs md:text-lg w-full md:max-w-[55vw]">
      <div class="mb-3">Recent Projects</div>
      <div @mouseleave="active = 0">
        <a
          class="flex items-center border-y py-3 pr-3 md:pr-6 group transition duration-500"
          :class="active === 0 ? inActiveStyling : activeStyling(1, active)"
          href="https://minirodini.com"
          target="_blank"
          @mouseover="active = 1"
          @click="active = 0"
        >
          <div class="w-[35%] md:w-2/5">Mini Rodini</div>
          <div class="flex-1">www.minirodini.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 md:group-hover:scale-125 md:group-hover:text-hotpink origin-left transition duration-300 text-hotpink md:text-black"
          />
        </a>
        <a
          class="flex items-center border-y py-3 pr-3 md:pr-6 group transition duration-500"
          :class="active === 0 ? inActiveStyling : activeStyling(2, active)"
          href="https://astridlindgren.com"
          target="_blank"
          @mouseover="active = 2"
          @click="active = 0"
        >
          <div class="w-[35%] md:w-2/5">Astrid Lindgren</div>
          <div class="flex-1">www.astridlindgren.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 md:group-hover:scale-125 md:group-hover:text-hotpink origin-left transition duration-300 text-hotpink md:text-black"
          />
        </a>
        <a
          class="flex items-center border-y py-3 pr-3 md:pr-6 group transition duration-500"
          :class="active === 0 ? inActiveStyling : activeStyling(3, active)"
          href="https://rohnisch.com"
          target="_blank"
          @mouseover="active = 3"
          @click="active = 0"
        >
          <div class="w-[35%] md:w-2/5">Röhnisch</div>
          <div class="flex-1">www.rohnisch.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 md:group-hover:scale-125 md:group-hover:text-hotpink origin-left transition duration-300 text-hotpink md:text-black"
          />
        </a>
        <a
          class="flex items-center border-y py-3 pr-3 md:pr-6 group transition duration-500"
          :class="active === 0 ? inActiveStyling : activeStyling(4, active)"
          href="https://oascompany.com"
          target="_blank"
          @mouseover="active = 4"
          @click="active = 0"
        >
          <div class="w-[35%] md:w-2/5">OAS</div>
          <div class="flex-1">www.oascompany.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 md:group-hover:scale-125 md:group-hover:text-hotpink origin-left transition duration-300 text-hotpink md:text-black"
          />
        </a>
        <a
          class="flex items-center border-y py-3 pr-3 md:pr-6 group transition duration-500"
          :class="active === 0 ? inActiveStyling : activeStyling(5, active)"
          href="https://eqpestore.com"
          target="_blank"
          @mouseover="active = 5"
          @click="active = 0"
        >
          <div class="w-[35%] md:w-2/5">Skistar EQPE</div>
          <div class="flex-1">www.eqpestore.com</div>
          <AtomIcon
            name="arrow-right"
            class="w-4 md:group-hover:scale-125 md:group-hover:text-hotpink origin-left transition duration-300 text-hotpink md:text-black"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script async setup>
const active = ref(0);
const activeStyling = (index, active) => {
  if (index === active) {
    return "text-black border-black border-b-black";
  }
  if (index === active + 1) {
    return "text-black/20 border-b-transparent border-t-transparent";
  }
  return "text-black/20 border-t-black/20 border-b-transparent";
};
const inActiveStyling =
  "text-black border-t-black border-b-transparent last:border-b-black";
</script>
