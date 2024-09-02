<script>
</script>

<template>

  <svg
    class="absolute top-0 z-[-1] h-[40rem] w-[100%] hue-rotate-[142deg] pointer-events-none animate-fade-in"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <radialGradient id="RadialGradient">
        <stop offset="0%" stop-color="hsla(0, 93%, 69%, 0.3)"></stop>
        <stop offset="60%" stop-color="hsla(5, 100%, 59%, 0.09)"></stop>
        <stop offset="100%" stop-color="hsla(4, 39%, 11%, 0)"></stop>
      </radialGradient>
      <linearGradient id="LinearGradient">
        <stop offset="0%" stop-color="hsla(4, 39%, 11%, 0)"></stop>
        <stop offset="25%" stop-color="hsla(5, 100%, 50%, 0.09)"></stop>
        <stop offset="50%" stop-color="hsla(0, 93%, 69%, 0.3)"></stop>
        <stop offset="75%" stop-color="hsla(5, 100%, 59%, 0.09)"></stop>
        <stop offset="100%" stop-color="hsla(4, 39%, 11%, 0)"></stop>
      </linearGradient>
    </defs>

    <!-- using my radial gradient -->
    <rect x="-75%" y="-100%" width="250%" height="200%" fill="url(#RadialGradient)" ></rect>
    <rect x="-75%" y="0" width="250%" height="1px" fill="url(#LinearGradient)" transform="translate(0, 1)"></rect>
  </svg>

</template>