<script setup lang="ts">
import LieuxCard from '@/components/LieuxCard.vue';
import { lieuxfavoris } from '@/backend';
import type { LieuxResponse } from '@/pocketbase-types';
const lieuxfav: LieuxResponse[] = await lieuxfavoris();
</script>
<template>
  <header>
    <h1 class=" h2 font-bold mx-4">Donnez le meilleur de vous même avec Foxtreme.</h1>
    <img src="/img/homepage_mobile.webp" alt="image présentation foxtreme" class="lg:hidden w-full">
    <img src="/img/homepage_desktop.webp" alt="image homepage 2" class="hidden lg:block w-full h-[600px] mb-3">

    <p class="h3 mx-4">La ville et sa pollution vous rendent anxieux, fatigués et déprimés ? </p>
    <p class="h3 mb-11 lg:mb-28 mx-4"> Vous aimez les défis seul ou en équipe et surpassez vos limite ?</p>

  <div>
  <h1 class="h1 font-bold text-center mb-11"> Fo<span class="text-toniccolor">X</span>treme est LA solution qu'il vous faut ! </h1>
  
  <div class="grille lg:mb-16">
  <div class="col-span-5 col-start-2 bg-contrastcolor rounded-2xl text-backgroundcolor mb-8 lg:py-20 py-8 px-4 lg:px-14"><p>Foxtreme est un site permettant de regrouper des informations générales sur la survie ainsi que les chemins et lieux divers de France, il a un but informatif et applicatif permettant d’obtenir des informations, de partage et d’échanges autour d’activités en pleine nature en toute sécurité. Avec nous vous pourrez être au courant des dernières informations concernant la survie.
  </p></div>
    <img src="/img/hp_1.webp" alt="illustration 1" class="mb-5 m-auto w-[500px] col-span-5 col-start-7">
  </div>
  
  <div class="grille lg:mb-16">
    <img src="/img/hp_2.webp" alt="illustration" class="mb-5 m-auto w-[500px] col-span-5 col-start-2">
    <div class="col-span-5 col-start-7 bg-contrastcolor rounded-2xl text-backgroundcolor mb-8 lg:py-28 py-8 px-14 lg:pl-20">
<p>Foxtreme vous donne accès</p>
<li>à des cartes intéractives</li>
<li>une communauté de passionnés</li>
<li>un espace d’échange</li>
<li>des informations inédites sur la faune et la flaure</li>
</div>
  </div>
  <div class="flex justify-center items-center mb-7 ">
     <button
       class="lg:mb-16 bg-toniccolor rounded-lg border-2 border-toniccolor px-5 py-2 font-semibold text-text hover:bg-text hover:text-backgroundcolor hover:border-text">
       <RouterLink to="/connexion">s'inscrire</RouterLink>
     </button>
    </div>
  </div>

<h2 class="text-center h3 mx-10 mb-8">Nous avons pour devise de vous aider à réaliser vos projets les plus ambitieux et de vous mettre en relation avec des gens ayant un goût prononcé pour la survie et les promenades en nature comme vous</h2>

<section>

    <RouterLink to="/ressources" class=" bg-contrastcolor rounded-3xl flex lg:mx-[450px] mb-9">
      <img src="/img/hp_3.webp" alt="card 1" class="w-[130px] lg:w-[140px]">
      <div class="">
      <h1 class="h5 text-backgroundcolor font-medium pt-4 lg:pt-7 mb-4 lg:mb-4 mx-3 lg:mx-8">Envie de découvrir le monde de la survie ?</h1>
      <p class=" lg:hidden h4 text-backgroundcolor lg:mx-8 mx-2 pb-7">Accedez a nos articles qui vous donnerons les bases pour bien débuter vos aventures.</p>
      <p class="hidden lg:block h4 text-backgroundcolor lg:mx-8 lg:pb-8">Accedez a nos articles qui vous donnerons les bases pour bien débuter vos aventures et qui vous permetteront de rester informer sur les nouveauté dans le monde de la survie.</p>
      </div>
    </RouterLink>
 

        <RouterLink to="/communaute" class=" bg-contrastcolor rounded-3xl flex lg:mx-[450px] mb-9">
        <img src="/img/hp_4.webp" alt="card 1" class="w-[130px] lg:w-[140px]">
        <div>
        <h1 class="h5 text-backgroundcolor font-medium pt-4 lg:pt-7 mb-4 lg:mb-4 mx-3 lg:mx-8">Besoin d’un conseil ?</h1>
        <p class="lg:hidden h4 text-backgroundcolor lg:mx-8 mx-2 pb-7">Demandez à la communauté de foxtrème qui saura vous aiguiller et vous  soutenir dans vos projets.</p>
        <p class="hidden lg:block h4 text-backgroundcolor lg:mx-8 lg:pb-8">Demandez à la communauté de foxtrème qui saura vous aiguiller et vous  soutenir dans vos projets. Vous pourrez échanger et partager de bons souvenirs.</p>
        </div>
      </RouterLink>

        <RouterLink to="/lieux" class=" bg-contrastcolor rounded-3xl flex lg:mx-[450px]">
          <img src="/img/hp_5.webp" alt="card 1" class="w-[130px] lg:w-[140px]">
          <div>
          <h1 class="h5 text-backgroundcolor font-medium pt-4 lg:pt-7 mb-4 lg:mb-4 mx-3 lg:mx-8">Envie de changement</h1>
          <p class="lg:hidden h4 text-backgroundcolor lg:mx-8 mx-2 pb-7">Vous voulez découvrir de nouveaux lieux? N’attendez plus Foxtrème vous permet d’accéder à des lieux merveilleux.</p>
          <p class="hidden lg:block h4 text-backgroundcolor lg:mx-8 lg:pb-8">Vous voulez découvrir de nouveaux lieux mais ne savez pas par où commencer ? N’attendez plus Foxtrème vous permet d’accéder à des lieux merveilleux dans toute la France et proche de chez vous.</p>
          </div>
        </RouterLink>
</section>

<section>
  <h1 class="h3 font-semibold text-center mt-7 mb-2">Partez à l’aventure dans toute la France dès maintenant</h1>
  <h2 class="h4 text-center">Nos coups de coeur du moment</h2>
      <div class="lg:grille pt-6 flex overflow-hidden overflow-x-scroll gap-5  ">
          <LieuxCard v-for=" unlieux of lieuxfav" :v-key="lieuxfavoris" v-bind="{ ...unlieux }"  class="flex-none lg:col-span-4 " />
      </div>
</section>

  </header>
</template>
