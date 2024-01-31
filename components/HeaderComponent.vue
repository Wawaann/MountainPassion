<template>
  <section class="h-[100vh] flex flex-col justify-between bg-cover bg-center transition-all duration-700"
    :style="{ backgroundImage: `url(${currentImage})` }">
    <header>
      <div class="bg-gradient-to-b from-gray-500 flex pl-10 pt-4">

        <div class="flex items-stretch h-full">
          <img src="/img/lightlogo.png" alt="logo" class="w-48">
        </div>

        <div class="mt-6 ml-12 pl-24 w-1/3">
          <nav class="flex items-center justify-around flex-1 h-full">
            <NuxtLink to="/"
              class="bg-white/50 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/75 hover:text-gray-500 hover:transition-color hover:ease-in hover:duration-75">
              Accueil</NuxtLink>
            <NuxtLink to="/mountain"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75">
              Montagnes</NuxtLink>
            <NuxtLink to="/seasons"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75">
              Saisons</NuxtLink>
            <NuxtLink to="/about"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75">
              A propos</NuxtLink>
          </nav>
        </div>

      </div>
    </header>

    <div class="text-left w-5/12 ml-24">
      <h1 class="text-8xl text-white font-custom">Les montagnes pour passion</h1>
    </div>

    <div class="">

    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      images: ['/img/bg/1.jpg', '/img/bg/2.jpg', '/img/bg/3.jpg', '/img/bg/4.jpg'],
      currentImageIndex: 0,
      currentImage: '/img/bg/1.jpg',
    };
  },
  methods: {
    changeBackground() {
      this.currentImage = this.images[this.currentImageIndex];
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      console.log(this.currentImage);

    },
  },
  mounted() {
    setInterval(this.changeBackground, 15000);
    this.changeBackground();
  },
}

</script>