<template>
  <section class="bg-img">
    <header>
      <div class="bg-gradient-to-b from-gray-600 flex pl-10 pt-4">

        <div class="flex items-stretch h-full">
          <img src="/img/lightlogo.png" alt="logo" class="w-48">
        </div>

        <div class="mt-6 ml-12 pl-24 w-1/3">
          <nav class="flex items-center justify-around flex-1 h-full">
            <NuxtLink to="/"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75">
              Acceuil</NuxtLink>
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

    <div class="text-left w-5/12 ml-24 mt-56">
      <h1 class="text-8xl text-white font-custom">Les montagnes pour passion</h1>
    </div>

  </section>
</template>

<style scoped>
.bg-img {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>