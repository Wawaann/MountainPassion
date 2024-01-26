<template>
  <section>
    <div
      class="bg-gray-500/45 w-fit rounded-full flex justify-center m-12 transition-all hover:bg-gray-500/80 hover:animate-pulse">
      <NuxtLink to="/">
        <Icon name="uis:angle-left" class="text-white" size="2.5rem" />
      </NuxtLink>
    </div>
    <div class="flex justify-around px-28 py-36" data-aos="fade-right" data-aos-delay="300">
      <div class="flex flex-col justify-start gap-12 w-1/2 pt-8">
        <div class="w-fit">
          <h1 class="text-6xl">Discover the Bunderspitz.</h1>
          <hr class="border-2 border-black w-2/3 mt-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium!
            Vel fugit aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque facere earum vitae enim voluptas voluptates vel, minima neque commodi ab temporibus?
            Quae ipsa, autem non commodi nulla mollitia illum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus, quae. Aliquam laboriosam exercitationem dicta, sapiente praesentium magnam nam pariatur! Vero
            natus quibusdam ullam. Dolore, quae? Totam corrupti sed aliquid sint? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit autem repellat modi assumenda ducimus quisquam, dolorem dolor veniam nostrum
            voluptate magnam rem labore aperiam dignissimos pariatur. Iure incidunt repellendus ipsa?</p>
        </div>
      </div>
      <div>
        <NuxtImg fit="cover" quality="100" src="/img/mountains/Bunderspitz/2.jpg" class="rounded-xl shadow-xl" width="750"
          height="550" data-aos="fade-left" data-aos-delay="300" />
      </div>
    </div>

    <hr class="border-black mx-36">

    <div class="flex justify-around px-28 py-36">
      <div>
        <NuxtImg fit="cover" quality="100" src="/img/mountains/Bunderspitz/3.jpg" class="rounded-xl shadow-xl" width="800"
          height="550" data-aos="fade-right" data-aos-delay="300" />
      </div>
      <div class="flex flex-col items-end gap-12 w-1/2" data-aos="fade-left" data-aos-delay="300">
        <div class="flex flex-col items-end w-fit">
          <h1 class="text-6xl">Explore all paths.</h1>
          <hr class="border-2 border-black w-2/3 mt-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium!
            Vel fugit aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque facere earum vitae enim voluptas voluptates vel, minima neque commodi ab temporibus?
            Quae ipsa, autem non commodi nulla mollitia illum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus, quae. Aliquam laboriosam exercitationem dicta, sapiente praesentium magnam nam pariatur! Vero
            natus quibusdam ullam. Dolore, quae? Totam corrupti sed aliquid sint? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit autem repellat modi assumenda ducimus quisquam, dolorem dolor veniam nostrum
            voluptate magnam rem labore aperiam dignissimos pariatur. Iure incidunt repellendus ipsa?</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  mounted() {
    // Récupère la position de défilement enregistrée
    const scrollPosition = sessionStorage.getItem('scrollPosition');

    // Défile vers la position enregistrée (ou en haut par défaut si la position n'est pas définie)
    window.scrollTo(0, scrollPosition || 500);

    // Efface la position de défilement enregistrée pour qu'elle ne soit pas utilisée à nouveau
    sessionStorage.removeItem('scrollPosition');
  },
}

</script>