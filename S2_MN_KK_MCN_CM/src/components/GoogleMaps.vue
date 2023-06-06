    <template>
      <GoogleMap
      api-key="AIzaSyDP-yUrQO6j5gcfYqpwPFZelGRWuhG104s"
      style="height: 600px"
      :center="center"
      :zoom="15"
      class="mt-16 lg:mx-40">
      <Marker :options="{ position: center }" />
      <Marker :options="{ position: lieux1}"/>
      </GoogleMap>

      <div>
      </div>

     </template>
 
     <script setup lang="ts">
     import { GoogleMap, Marker } from 'vue3-google-map'
 
     const center = { lat: 47.49566525144965, lng: 6.805222081286718 }
     const lieux1 = { lat: 47.18559646606445, lng: 6.872682094573975 }
     </script>


