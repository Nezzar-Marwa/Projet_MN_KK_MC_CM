<script setup lang="ts">
import { pb } from '@/backend'
import { OneId } from '@/backend';


const props = defineProps<{ id: string, }>();
const informationArticle = await OneId(props.id)
const img0 = informationArticle.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(informationArticle, img0, { thumb: '100x200' })
</script>

<template>
    <h1 class="h1 mt-10 mb-5 text-center "> {{ informationArticle.titre }}</h1>
    <p class="h4 mt-10 mb-5 lg:text-center mx-4 lg:mx-64"> {{ informationArticle.chapo }}</p>
    <img :src="urlImg0"
        class=" m-auto self-stretch flex-grow-0 flex-shrink-0  rounded-tl-[7px] rounded-tr-[7px] object-cover w-[300px] mb-7 lg:w-[600px]" />
    <p class="h4 mx-4 lg:mx-64 mb-14">{{ informationArticle.description }}</p>
</template>