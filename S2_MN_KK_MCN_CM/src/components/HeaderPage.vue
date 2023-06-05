<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import LogoIcon from '@/components/icons/iconLogo.vue'
import { RouterLink } from 'vue-router'


const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}

</script>

<template>
    <header
        class="relative z-5 flex w-full translate-y-0 items-stretch justify-between bg-backgroundcolor px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
        <div class="flex items-center">
            <a href="/">
                <LogoIcon />
            </a>
        </div>

        <div class="flex items-center gap-4 lg:flex-row-reverse">

            <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45 bg-backgroundcolor': activeMenu }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300"
                    :class="{ 'bg-backgroundcolor opacity-0': activeMenu }"></div>
                <div class="ease h-[2px] w-full transform rounded-full bg-text transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45 bg-backgroundcolor': activeMenu }"></div>
            </button>

            <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-contrastcolor text-2xl text-backgroundcolor transition-all duration-300 ease-in-out lg:visible lg:relative lg:pt-4 lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-semibold lg:uppercase lg:tracking-wide lg:text-text lg:bg-backgroundcolor lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/ressources" @click="closeMenu">RESSOURCES</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/communaute" @click="closeMenu">COMMUNAUTE</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/cartes" @click="closeMenu">CARTES INTERACTIVES</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/a_propos" @click="closeMenu">A PROPOS</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/contact" @click="closeMenu">CONTACT</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link lg:mt-none" to="/" @click="closeMenu"><button
                                class="rounded-full border border-toniccolor px-10 py-3 font-poppins font-medium text-backgroundcolor bg-toniccolor">S'INSCRIRE</button>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>