<template>
  <HeaderComponent />
  <slot />

  <div class="fixed bottom-4 left-4 rounded-full hover:animate-pulse">
    <Icon name="uis:angle-up" class="my-fixed-button rounded-full" size="2.5rem" @click="scrollToTop"/>
  </div>

  <FootherComponent />
  
</template>

<script>

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
  },
}

</script>

<style scoped>
.my-fixed-button {
  visibility: visible;
  z-index: 100;
  background-color: rgba(128, 128, 128, 0.45);
  color: white;
  transition-property: all;
  transition-duration: 250ms;
}

:hover.my-fixed-button {
  background-color: rgba(128, 128, 128, 0.80);
}

</style>