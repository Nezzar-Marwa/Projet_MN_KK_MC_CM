<script setup lang="ts">
import LieuxCard from '@/components/LieuxCard.vue';
import { AllLieux } from '@/backend';
import type { LieuxResponse } from '@/pocketbase-types';
const leslieux: LieuxResponse[] = await AllLieux();
</script>

<template>
    <div class="pt-36 mb-28">
        <h1 class="h1 font-semibold uppercase text-center mb-6">Les lieux pour commencer une aventure</h1>
        <p class="h3 text-center">Grace a Foxtreme découvrez de nouveaux horizons  </p>
    </div>
    <div class="justify-center  lg:px-24 items-center grille">
        <LieuxCard v-for=" unlieux of leslieux" :v-key="AllLieux" v-bind="{ ...unlieux }" />
    </div>

    <div class="mb-14">
        <h2 class="h3 font-medium text-center mb-6">Une suggestions de nouveaux lieux ? </h2>
        <p class="h4 text-center">Rendez-vous sur le formulaire de contact en bas de page </p>
    </div>
</template>