<script setup lang="ts">
import { pb } from '@/backend'
import { OneId2 } from '@/backend';


const props = defineProps<{ id: string, }>();
const informationlieux = await OneId2(props.id)
const img0 = informationlieux.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(informationlieux, img0, { thumb: '100x200' })
</script>

<template>
    <h1 class="h1 mt-10 mb-5 text-center "> {{ informationlieux.nom }}</h1>
    <img :src="urlImg0"
        class=" m-auto self-stretch flex-grow-0 flex-shrink-0  rounded-tl-[7px] rounded-tr-[7px] object-cover w-[300px] mb-7 lg:w-[600px]" />
    <p class="h4 mt-10 mb-5 lg:text-center mx-4 lg:mx-64"> {{ informationlieux.region }}</p>
    <p class="h4 mt-10 mb-5 lg:text-center mx-4 lg:mx-64"> {{ informationlieux.difficulte }}</p>
    <p class="h4 mx-4 lg:mx-80 mb-14">{{ informationlieux.description }}</p>
    <div class="flex justify-center items-center mb-7 ">
        <button
            class=" rounded-lg border-2 border-text px-5 py-2 font-semibold text-text hover:bg-text hover:text-backgroundcolor">
            <RouterLink to="/lieux">Retour aux lieux</RouterLink>
        </button>
    </div>
</template> 