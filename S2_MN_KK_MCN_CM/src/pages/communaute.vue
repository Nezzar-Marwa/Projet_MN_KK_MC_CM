<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import { articlesfavoris } from '@/backend';
import type { ArticlesResponse } from '@/pocketbase-types';
const articlesfav: ArticlesResponse[] = await articlesfavoris();
import LikeIcon from  '@/components/icons/like.vue'
import DislikeIcon from '@/components/icons/dislike.vue'
import likerougeIcon from '@/components/icons/likerouge.vue'

</script>

<template>
<div class="pt-20 mb-28">
   <h1 class="h1 font-semibold uppercase text-center mb-6">Partagez</h1>
   <p class="h3 text-center mb-14">Envie de papoter ? N’hésitez plus !</p>

   <section>
      <h1 class="h4 lg:mx-44 font-medium mb-10 ml-2">Sujets à la une</h1>

      <div class=" bg-backgroundcolor shadow-xl lg:mx-48 pt-9 lg:pl-14 lg:mb-11 mb-10">
         <div class="flex">
         <img src="/img/profile1.webp" class="w-[100px]  h-[100px]">
         <div>
            <h1 class="h2 lg:pl-10 pl-5 font-semibold">tibidou758</h1>
            <p class="h4 lg:px-10 px-5">Bonjour à tous, Pourriez-vous s'il vous plaît me donner des conseils sur le matériel à prendre pour faire le sentier du rocher de Saint Julien sur plusieurs jours</p>
         </div>
         </div>
            <div class="gap-5 flex ml-5 mt-4 pb-4">
               <LikeIcon/><DislikeIcon/>
            </div>
            <p class="text-right pr-6 pb-4"> voir les 10 réponses</p>
      </div>

            <div class=" bg-backgroundcolor shadow-xl lg:mx-56 mx-5 pt-9 lg:pl-14 lg:mb-11 mb-10">
            <div class="flex">
            <img src="/img/profile2.webp" class="w-[100px]  h-[100px]">
            <div>
               <h1 class="h2 lg:pl-10 pl-5 font-semibold">AtnFanN1</h1>
               <p class="h4 lg:px-10 px-5">Bonjour @tibidou758, j’ai personnellement fait ce sentier et j’ai pris un sac de couchage, une lampe, une tente, de l’eau BEAUCOUP d’eau et il faut...</p>
            </div>
            </div>
               <div class="gap-5 flex ml-5 mt-4 pb-4">
                  <likerougeIcon/><DislikeIcon/>
               </div>
         </div>

               <div class=" bg-backgroundcolor shadow-xl lg:mx-56 mx-5 pt-9 lg:pl-14 lg:mb-11">
               <div class="flex">
               <img src="/img/profile3.webp" class="w-[100px]  h-[100px]">
               <div>
                  <h1 class="h2 lg:pl-10 pl-5 font-semibold">Yrep</h1>
                  <p class="h4 lg:px-10 px-5">@tibidou758 j’aimerais ajouter qu’il faudrait aussi pouvoir prévoir des matérieux de secours ou un moyen de transport en cas d’imprévus...</p>
               </div>
               </div>
                  <div class="gap-5 flex ml-5 mt-4 pb-4">
                     <likerougeIcon/><DislikeIcon/>
                  </div>
            </div>

   </section>
  </div>

  <div>
   <h1>A voir aussi</h1>
  </div>

   <div class="lg:grille pt-6 flex overflow-hidden overflow-x-scroll gap-5  ">
       <ArticleCard v-for=" unarticle of articlesfav" :v-key="articlesfavoris" v-bind="{ ...unarticle }"  class="flex-none lg:col-span-4 " />
         </div>
  </template>