<template>
  <section class="bg-img">
    <header>
      <div class="bg-gradient-to-b from-gray-600 flex pl-10 pt-4">

        <div class="flex items-stretch h-full">
          <img src="/img/light-logo.png" alt="logo" class="w-48">
        </div>

        <div class="mt-6 ml-12 pl-24 w-1/4">
          <nav class="flex items-center justify-around flex-1 h-full">
            <NuxtLink to="/"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75 ">
              Home</NuxtLink>
            <NuxtLink to="/mountain"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75 ">
              Mountains</NuxtLink>
            <NuxtLink to="/about"
              class="bg-white/25 text-white px-4 py-2.5 font-[telegraph] rounded-full transition-color ease-in duration-100 hover:bg-white/50 hover:transition-color hover:ease-in hover:duration-75 ">
              About</NuxtLink>
          </nav>
        </div>

      </div>
    </header>

    <div class="text-left w-1/3 ml-24 mt-52">
      <h1 class="text-9xl text-white font-custom">Passion of Mountain</h1>
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