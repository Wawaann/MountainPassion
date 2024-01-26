<template>
  <section class="flex flex-col flex-wrap justify-center items-center w-full">
    <div class="flex justify-between gap-4 px-32 py-48">
      <div class="h-auto flex flex-col justify-around text-left" data-aos="fade-right" data-aos-delay="300">
        <div class="w-fit">
          <h1 class="text-6xl">Climb the highest peak.</h1>
          <hr class="border-2 border-black w-2/3 my-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam
            expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium! Vel fugit
            aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Officia sint, asperiores recusandae dolor odio culpa! Quia laudantium ducimus,
            necessitatibus accusantium culpa mollitia voluptatum ipsum, unde fugiat eos, suscipit incidunt ut. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tenetur minima et vitae sit optio rerum repudiandae laudantium
            labore maxime consectetur praesentium laboriosam quia quod nihil qui alias, fuga recusandae ullam?</p>
        </div>
        <NuxtLink to="/mountains/Bunderspitz"
          class="text-white bg-slate-500/65 py-4 px-4 w-fit rounded-full transition-all ease-in hover:bg-slate-500">Read
          more...
        </NuxtLink>
      </div>
      <NuxtImg fit="cover" quality="100" src="/img/mountains/Bunderspitz/1.jpg" class="rounded-xl shadow-xl" width="600"
        height="675" data-aos="fade-left" data-aos-delay="300" />
    </div>
  </section>

  <hr class="border-black mx-36">

  <div class="flex justify-around px-20 py-36">
    <div>
      <NuxtImg fit="cover" quality="100" src="/img/home/climb.jpg" class="rounded-xl shadow-xl" width="800"
        height="550" data-aos="fade-right" data-aos-delay="300" />
    </div>
    <div class="flex flex-col items-end gap-12 w-1/2" data-aos="fade-left" data-aos-delay="300">
      <div class="flex flex-col items-end w-fit">
        <h1 class="text-6xl">Discover the world.</h1>
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
      <NuxtLink to="#"
        class="text-white bg-slate-500/65 py-4 px-4 w-fit rounded-full transition-all ease-in hover:bg-slate-500">Read
        more...
      </NuxtLink>
    </div>
  </div>

  <hr class="border-black mx-36">

  <section class="flex flex-col flex-wrap justify-center items-center w-full">
    <div class="flex justify-between gap-4 px-32 py-48">
      <div class="h-auto flex flex-col justify-around text-left" data-aos="fade-right" data-aos-delay="300">
        <div class="w-fit">
          <h1 class="text-6xl">Unveil new heights.</h1>
          <hr class="border-2 border-black w-2/3 my-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam
            expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium! Vel fugit
            aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque facere earum vitae enim voluptas voluptates vel, minima neque commodi ab temporibus?
            Quae ipsa, autem non commodi nulla mollitia illum laborum.</p>
        </div>
        <NuxtLink to="#"
          class="text-white bg-slate-500/65 py-4 px-4 w-fit rounded-full transition-all ease-in hover:bg-slate-500">Read
          more...
        </NuxtLink>
      </div>
      <NuxtImg fit="cover" quality="100" src="/img/home/explore.jpg" class="rounded-xl shadow-xl" width="750" height="550"
        data-aos="fade-left" data-aos-delay="300" />
    </div>
  </section>
</template>

<script>


</script>

<style scoped>
.bg-img {
  background-image: url('/img/mountains/1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.my-container {
  display: flex;
  justify-content: space-around;
  height: 60vh;
  margin-left: 7rem;
  margin-right: 7rem;
  margin-top: 10rem;
  margin-bottom: 20rem;
}

/* CA MARCHE PAS !!! */
.animated {
  padding: 0;
}

.fadeInRight {
  transform: translateX(0);
  transition: all;
  transition-duration: 75ms;
}

/*  CA MARCHE PAS !!! */
</style>