<template>
  <div class="w-full h-full bg-black/50 absolute inset-0 flex justify-center items-center z-50">
    <div class="popup-body shadow-xl rounded-lg bg-white p-4 w-10/12 h-5/6 box-border overflow-scroll">
      <slot />
    </div>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.popup-body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.popup-body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>