<script setup lang="ts">
import GoogleMaps from '@/components/GoogleMaps.vue';
</script>
<template>
    <h1 class="mt-10 h1 text-center font-semibold">N’attendez plus</h1>
    <h2 class="h2 text-center">cherchez vos prochaines destinations dès maintenant !</h2>
    <GoogleMaps />

   <div class="my-10">
    <h1 class=" h2 font-medium mb-4 text-center">Découvrez en d'avantages sur les lieux que nous vous présentons sur cette carte si vous voulez vivre une aventure inoubliable !</h1>
  <li class="ml-11 mb-2 underline h4">
     <RouterLink to="/lieux/w3xvejv59lvpcg5">Le chemin de Régordane</RouterLink>
     </li>
<li class="ml-11 mb-2 underline h4">
     <RouterLink to="/lieux/w1aiqdk84suzx5l">Passerelles himalayennes du Monteynard</RouterLink>
 </li>

  <li class="ml-11 mb-2 underline h4">
         <RouterLink to="/lieux/1ubbz2160joyz7z">Autour du Rocher Saint-Julien</RouterLink>
     </li>

  <li class="ml-11 mb-2 underline h4">
         <RouterLink to="/lieux/vefum1zne0glll2">Le ballon d'Alsace</RouterLink>
     </li>
      <li class="ml-11 mb-2 underline h4">
         <RouterLink to="/lieux/4o1ugjtk1f8jh56">Le saut de la bourrique</RouterLink>
     </li>
      <li class="ml-11 mb-2 underline h4">
         <RouterLink to="/lieux/nnqzwdua12rp23h">La source Bleu</RouterLink>
     </li>
      <li class="ml-11 mb-2 underline h4">
         <RouterLink to="/lieux/6y79gskwczatekk">Les échelles de la mort</RouterLink>
     </li>
           <li class="ml-11 mb-2 underline h4">
             <RouterLink to="/a_propos">BUT MMI de Montbéliard</RouterLink>
         </li>
     </div> 
</template>