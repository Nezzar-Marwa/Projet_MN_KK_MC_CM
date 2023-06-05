<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
</script>
<template>
    <div class="pt-20 mb-28">
        <h1 class="h1 font-semibold uppercase text-center"> À propos</h1>
        <img src="/img/logo_final.webp" alt="logo" class=" m-auto py-10">
        <p class="h4 text-text text mx-7 mb-5 lg:mx-72">Foksers est une association qui est le résultat d’un projet
            étudiant, qui a évolué pour fournir à la plus grande partie, la possibilité de partir en randonnée partout en
            toute simplicité et sécurité.</p>
        <p class="h4 text-text text mx-7 mb-5 lg:mx-72">Fondé en 2023 par quatre étudiants de la formation MMI à
            Montbéliard, en France, Foksers a pour objectif de donner l’opportunité à chacun, de participer activement au
            sein de notre communauté ou de son côté à des activités en extérieur ou pour réaliser des objectifs personnels
        </p>
        <p class="h4 text-text text mx-7 mb-5 lg:mx-72">Nous savons que la recherche et la documentation sur la randonnée et
            la survie peut être complexe, c'est à ce moment-là que nous entrons en jeu.</p>
        <p class="h4 text-text text mx-7 mb-5 lg:mx-72">Nous donnons la chance à chacun de pouvoir découvrir toutes les
            possibilités et opportunités en termes de hiking et randonnée pédestres, et de survie dans leur région et près
            de chez eux, et de faire le choix parmi nos partenaires présents sur le site pour leur donner la possibilité de
            d’atteindre leurs objectifs.</p>
        <p class="h4 text-text text mx-7 mb-5 lg:mx-72">Foksers, c’est la possibilité de prendre un nouveau départ vers
            votre passion. Ce qui nous motive, c’est de vous aider à donner vie à vos passions.</p>
    </div>

    <div>
        <h1 class="h1 font-semibold uppercase text-center">Notre équipe</h1>
    </div>
    <section class=" bg-contrastcolor mb-36 py-14 lg:grille">

        <div class="mb-14 col-span-2 col-start-1">
            <img src="/img/mc.webp" alt="marie claire" class="m-auto">
            <h1 class="h6 text-backgroundcolor text-center">Marie-Claire Naze</h1>
            <p class="h6 text-backgroundcolor text-center">marieclaire.naze.pro@gmail.com</p>
            <ul class="flex justify-center items-center gap-4">
                <li>
                    <a href="https://facebook.com" aria-label="facebook">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" aria-label="instagram">
                        <InstagramIcon />
                    </a>
                </li>
            </ul>
        </div>

        <div class="mb-14 col-span-2 col-start-4">
            <img src="/img/mn.webp" alt="Marwa nezzar" class="m-auto">
            <h1 class="h6 text-backgroundcolor text-center">Marwa Nezzar</h1>
            <p class="h6 text-backgroundcolor text-center">marwanezzar@gmail.com</p>
            <ul class="flex justify-center items-center gap-4">
                <li>
                    <a href="https://facebook.com" aria-label="facebook">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" aria-label="instagram">
                        <InstagramIcon />
                    </a>
                </li>
            </ul>
        </div>

        <div class="mb-14 col-span-2 col-start-7">
            <img src="/img/kk.webp" alt="khadidja keffous" class="m-auto">
            <h1 class="h6 text-backgroundcolor text-center">Khadidja Keffous</h1>
            <p class="h6 text-backgroundcolor text-center">khadidja.keffous@gmail.com</p>
            <ul class="flex justify-center items-center gap-4">
                <li>
                    <a href="https://facebook.com" aria-label="facebook">
                        <FacebookIcon />
                    </a>
                </li>
            <li>
                <a href="https://instagram.com" aria-label="instagram">
                    <InstagramIcon />
                </a>
            </li>
        </ul>
    </div>

    <div class="mb-14 col-span-2 col-start-10">
        <img src="/img/cm.webp" alt="camilia mokdad" class="m-auto">
        <h1 class="h6 text-backgroundcolor text-center">Camilia Mokdad</h1>
        <p class="h6 text-backgroundcolor text-center">mokdad.camilia@gmail.com</p>
        <ul class="flex justify-center items-center gap-4">
            <li>
                <a href="https://facebook.com" aria-label="facebook">
                    <FacebookIcon />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" aria-label="instagram">
                    <InstagramIcon />
                </a>
            </li>
        </ul>
    </div>
</section></template>