<script setup lang="ts">
import { pb } from '@/backend'
import type { ArticlesResponse } from '@/pocketbase-types'

const props: ArticlesResponse = defineProps<ArticlesResponse>()

const img0 = props.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>

<template>
     <RouterLink :to="{ name: 'ressources-id', params: {id}}" class="lg:col-span-3"> 
        <div
            class="shadow-2xl flex flex-col justify-start  overflow-hidden gap-[3px] rounded-tl-[51.94px]  rounded-br-[51.94px] bg-card mb-14">
            <img 
            :src="urlImg0"
                class="self-stretch  flex-grow-0 h-52 flex-shrink-0  rounded-tl-[51.94px]  object-cover" />
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 p-2">
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-0.5">

                    <p class="h3 text-left font-bold text-text">
                        {{ titre }}
                    </p>
                </div>
            </div>
        </div>
     </RouterLink> 
</template>