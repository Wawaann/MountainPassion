<template>
  <section>
    <div class="flex flex-col gap-12 py-36">
      <div class="flex justify-center gap-1 px-8">
        <div class="mt-20" data-aos="fade-right" data-aos-delay="300">
          <NuxtImg fit="cover" src="/img/mountains/Alps/2.jpg" class="rounded-xl shadow-xl" quality="100" height="325"
            width="425" />
        </div>
        <div class="" data-aos="fade-up" data-aos-delay="300">
          <NuxtImg fit="cover" src="/img/mountains/Pyrenees/2.jpg" class="rounded-xl shadow-xl" quality="100" height="325"
            width="425" />
        </div>
        <div class="mt-20" data-aos="fade-down" data-aos-delay="300">
          <NuxtImg fit="cover" src="/img/mountains/Jura/1.jpg" class="rounded-xl shadow-xl" quality="100" height="325"
            width="425" />
        </div>
        <div class="" data-aos="fade-left" data-aos-delay="300">
          <NuxtImg fit="cover" src="/img/mountains/Vosges/1.jpg" class="rounded-xl shadow-xl" quality="100" height="325"
            width="425" />
        </div>
      </div>
      <div class="flex flex-col px-32">
        <div class="flex flex-col w-fit" data-aos="fade-right" data-aos-delay="300">
          <h1 class="text-5xl">Découvrez la France sous un nouveau jour.</h1>
          <hr class="border-2 border-black w-3/4 my-2">
        </div>
        <div class="flex justify-around gap-2 py-12" data-aos="fade-up" data-aos-delay="300">
          <p class="text-lg text-justify w-5/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut esse
            ducimus. Qui
            minima voluptatibus ducimus incidunt hic quo aliquam tempora odio. Excepturi, praesentium perferendis quasi
            quo nemo quisquam commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto id debitis
            repellat exercitationem eligendi quia adipisci, dicta repellendus impedit praesentium nihil quaerat, odio
            nostrum aliquid blanditiis deserunt atque possimus eaque? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Praesentium quasi inventore veritatis, dicta animi rerum distinctio saepe nobis nihil aperiam totam aut
            ullam deleniti libero? Alias dolor voluptatibus veniam fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam, suscipit consequuntur. Iure, distinctio incidunt rerum, velit modi est repellat ipsum
            nesciunt dignissimos necessitatibus esse rem quis assumenda reiciendis natus quaerat!</p>
          <p class="text-lg text-justify w-5/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus
            omnis voluptate, eligendi quasi labore et facilis nemo ex neque numquam dolorum eum, ea tenetur iste velit
            voluptatibus facere expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus, quis amet
            consectetur et veniam, dolore ut mollitia eius ab facilis eveniet beatae, quisquam veritatis quasi animi
            accusantium unde rerum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis non perspiciatis
            laboriosam necessitatibus veniam quis deserunt. Labore consectetur ut harum delectus atque laboriosam ad?
            Atque, deserunt! Iste at natus veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            accusantium ducimus a hic optio animi ea sit repudiandae! Accusamus labore incidunt consequatur, assumenda
            repellendus earum saepe dolore. Quam, quibusdam voluptate.</p>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-black mx-36">

  <section>
    <div class="flex justify-between gap-4 px-32 py-28">
      <div class="h-auto flex flex-col justify-around text-left" data-aos="fade-right" data-aos-delay="300">
        <div class="w-fit">
          <h1 class="text-5xl">Découvrez les Pyrénées.</h1>
          <hr class="border-2 border-black w-2/3 my-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium!
            Vel fugit aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque facere earum vitae enim voluptas voluptates vel, minima neque commodi ab temporibus?
            Quae ipsa, autem non commodi nulla mollitia illum laborum.</p>
        </div>
        <NuxtLink to="/mountains/Pyrenees"
          class="text-white bg-slate-500/65 py-4 px-4 w-fit rounded-full transition-all ease-in hover:bg-slate-500">Read
          more...
        </NuxtLink>
      </div>
      <NuxtImg fit="cover" quality="100" src="/img/mountains/Pyrenees/1.jpg" class="rounded-xl shadow-xl" width="650"
        height="500" data-aos="fade-left" data-aos-delay="300" />
    </div>
  </section>

  <section>
    <div class="flex justify-around px-32 py-28">
      <div>
        <NuxtImg fit="cover" quality="100" src="/img/mountains/Alps/1.jpg" class="rounded-xl shadow-xl" width="650"
          height="500" data-aos="fade-right" data-aos-delay="300" />
      </div>
      <div class="flex flex-col items-end gap-12 w-1/2" data-aos="fade-left" data-aos-delay="300">
        <div class="flex flex-col items-end w-fit">
          <h1 class="text-5xl">Contemplez les Alpes.</h1>
          <hr class="border-2 border-black w-2/3 mt-2">
        </div>
        <div class="w-4/5">
          <p class="text-justify indent-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum
            omnis magnam expedita, nemo quisquam debitis hic quasi ut esse animi nobis suscipit ab, ratione laudantium!
            Vel fugit aperiam reiciendis. Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque facere earum vitae enim voluptas voluptates vel, minima neque commodi ab temporibus?
            Quae ipsa, autem non commodi nulla mollitia illum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus, quae. Aliquam laboriosam exercitationem dicta.</p>
        </div>
        <NuxtLink to="/mountains/Alps"
          class="text-white bg-slate-500/65 py-4 px-4 w-fit rounded-full transition-all ease-in hover:bg-slate-500">Read
          more...
        </NuxtLink>
      </div>
    </div>
  </section>

  <hr class="border-black mx-36">
</template>

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
