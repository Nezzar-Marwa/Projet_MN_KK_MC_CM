    <template>
      <GoogleMap
      api-key="AIzaSyDP-yUrQO6j5gcfYqpwPFZelGRWuhG104s"
      style="height: 600px"
      :center="center"
      :zoom="15"
      class="mt-16 lg:mx-40">
      <Marker :options="{ position: center }" />
      <Marker :options="{ position: lieux1}"/>
      <Marker :options="{ position: lieux2 }"/>
      <Marker :options="{ position: lieux3 }"/>
      <Marker :options="{ position: lieux4 }"/>
      <Marker :options="{ position: lieux5 }"/>
      <Marker :options="{ position: lieux6 }"/>
      <Marker :options="{ position: lieux7 }"/>
      </GoogleMap>

      <div>
      </div>

     </template>
 
     <script setup lang="ts">
     import { GoogleMap, Marker } from 'vue3-google-map'
 
     const center = { lat: 47.49566525144965, lng: 6.805222081286718 }
     const lieux1 = { lat: 47.18559646606445, lng: 6.872682094573975 }
     const lieux2 = { lat: 47.785, lng: 6.96693 }
     const lieux3 = { lat: 45.04366, lng: 3.88523 }
     const lieux4 = { lat: 44.86246, lng: 5.66926 }
     const lieux5 = { lat: 44.25983, lng: 5.27339 }
     const lieux6 = { lat: 48.048122, lng: 6.842734 }
     const lieux7 = { lat: 46.78736, lng: 6.30464 }
     </script>


