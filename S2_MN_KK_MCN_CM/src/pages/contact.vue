<script setup lang="ts">
</script>

<template>
  <h4 class=" pt-20 mb-14 mx-7 font-poppins text-center h5">Une remarque ? une suggestion ? un commentaire ? N’hésitez pas
    à nous en faire part.
    Car pour nous votre avis compte</h4>
  <div class="about flex justify-center items-center mb-10">
    <section class="">
      <form class="border px-10 py-9" action="#">
        <div>
          <label for="Prénom*">Prénom<span class="text-toniccolor">*</span> </label>
          <input
            class="flex rounded-lg text-text border mb-4 px-12 py-1  border-text focus:outline-toniccolor focus:ring-1 focus:ring-toniccolor lg:px-24 "
            type="text" name="Prénom" id="Prénom">
        </div>
        <div>
          <label for="Nom*">Nom<span class="text-toniccolor">*</span></label>
          <input
            class="flex rounded-lg text-text border mb-4 px-12 py-1  border-text focus:outline-toniccolor focus:ring-1 focus:ring-toniccolor lg:px-24  "
            type="text" name="Nom" id="Nom">
        </div>
        <div>
          <label for="Mail*">Mail<span class="text-toniccolor">*</span></label>
          <input
            class="flex rounded-lg text-text border mb-4 px-12 py-1  border-text  invalid:border-invalid invalid:text-invalid focus:outline-none focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid lg:px-24 "
            type="email" placeholder="VotreEmail@gmail.com" name="Mail">
        </div>
        <div>
          <label for="Téléphone*">Téléphone<span class="text-toniccolor">*</span></label>
          <input
            class="flex rounded-lg text-text border mb-4 px-12 py-1  border-text  invalid:border-invalid invalid:text-invalid focus:outline-toniccolor focus:ring-1 focus:ring-toniccolor focus:invalid:border-invalid focus:invalid:ring-invalid lg:px-24 "
            type="text" placeholder="Votre numéro ici" name="Téléphone">
        </div>
        <div>
          <label for="message*">Message<span class="text-toniccolor">*</span></label>
          <textarea
            class="flex rounded-lg text-text border mb-4 px-16 py-1  border-text focus:outline-toniccolor focus:ring-1 focus:ring-toniccolor lg:px-28"
            id="msg" name="message" rows="5"></textarea>
        </div>
        <div class="flex justify-center items-center mb-10">
          <button
            class="rounded-full border bg-toniccolor border-toniccolor px-10 py-3 font-bold text-backgroundcolor hover:bg-text hover:border-text"
            type="submit">Envoyer</button>
        </div>
      </form>
    </section>
  </div>
</template>
