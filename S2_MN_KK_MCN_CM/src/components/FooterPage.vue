<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'

</script>

<template>
    <footer class="grille space-y-6 bg-contrastcolor py-16 px-6 text-backgroundcolor">

        <div class="col-span-2 col-start-1 lg:mt-7 ">
            <h4 class="font-poppins text-base font-semibold uppercase mb-2">Nous</h4>
            <address class="font-poppins text-sm">
                <a href="tel:0384542727">03 84 54 27 27</a><br />
                <a href="mailto:Foksers@contact.fr">foksers@contact.fr</a>
            </address>
        </div>

        <nav class="col-span-2 col-start-4 ">
            <h4 class="font-poppins text-base font-semibold uppercase mb-2">Liens utiles</h4>
            <ul class="font-poppins text-sm">
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Donations</a></li>
                <li><a href="#">Newsletter</a></li>
            </ul>
        </nav>



        <div></div>

        <div class="col-span-2 col-start-7">
            <h4 class="font-poppins text-base font-semibold uppercase mb-3 ">Nous suivre</h4>
            <ul class="flex gap-4">
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
                <li>
                    <a href="https://twitter.com" aria-label="twitter">
                        <TwitterIcon />
                    </a>
                </li>
            </ul>
        </div>
        <section class=" col-span-3 col-start-9 space-y-3">
            <h4 class="mb-8 font-poppins text-center text-sm">Une remarque ? une suggestion ? un commentaire ? N’hésitez pas
                à nous en faire part.
                Car pour nous votre avis compte</h4>
            <form action="#">
                <div>
                    <label for="Prénom*">Prénom<span class="text-toniccolor">*</span> </label>
                    <input
                        class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor lg:px-24 "
                        type="text" name="Prénom" id="Prénom">
                </div>
                <div>
                    <label for="Mail*">Mail<span class="text-toniccolor">*</span></label>
                    <input
                        class="flex rounded-lg text-text border mb-4 px-12 py-1  border-toniccolor  invalid:border-invalid invalid:text-invalid focus:outline-none focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid lg:px-24 "
                        type="email" placeholder="VotreEmail@gmail.com" name="Mail">
                </div>
                <div>
                    <label for="message*">Message<span class="text-toniccolor">*</span></label>
                    <textarea
                        class="flex rounded-lg text-text border mb-4 px-16 py-1  border-toniccolor focus:outline-none focus:ring-1 focus:ring-toniccolor lg:px-28"
                        id="msg" name="message" rows="5"></textarea>
                </div>
                <div>
                    <button
                        class="rounded-full border border-toniccolor px-10 py-3 font-bold text-backgroundcolor hover:bg-toniccolor"
                        type="submit">Envoyer</button>
                </div>
            </form>
        </section>
    </footer>
</template>