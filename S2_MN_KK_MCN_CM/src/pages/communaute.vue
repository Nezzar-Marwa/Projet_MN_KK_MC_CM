<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import { articlesfavoris } from '@/backend';
import type { ArticlesResponse } from '@/pocketbase-types';
const articlesfav: ArticlesResponse[] = await articlesfavoris();
</script>

<template>
<div class="pt-20 mb-28">
   <h1 class="h1 font-semibold uppercase text-center mb-6">Partagez</h1>
   <p class="h3 text-center">Envie de papoter ? N’hésitez plus !</p>
  </div>

  
   <div class="lg:grille pt-6 flex overflow-hidden overflow-x-scroll gap-5  ">
       <ArticleCard v-for=" unarticle of articlesfav" :v-key="articlesfavoris" v-bind="{ ...unarticle }"  class="flex-none lg:col-span-4 " />
         </div>
  </template>