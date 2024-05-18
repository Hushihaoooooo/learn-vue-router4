<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link 
      v-for="experience in destination.experiences" 
      :key="experience.slug"
      :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
      >
        <!-- 这里的:experience是传出的参数 -->
        <ExperienceCard :experience="experience" />
      </router-link>

    </div>

  </section>
</template>
<script>
  import sourceData from '@/data.json'
  import ExperienceCard from '@/components/ExperienceCard.vue'
  export default {
    components: {ExperienceCard},
    props:{
    id: {type: Number, required: true}
    },
    computed:{
      destinationId(){
        return parseInt(this.$route.params.id)
      },
      destination(){
        return sourceData.destinations.find(destination => destination.id === this.id)
      }
    }
  }
  </script>
<!-- <template>
    <section class="destinations">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const destination = ref(null);

async function fetchDestination() {
  try {
    const res = await axios.get(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`);
    destination.value = res.data;
    console.log(res);
  } catch (error) {
    console.error('Error fetching destination:', error);
  }
}

fetchDestination();

watch(() => route.params, fetchDestination);
</script> -->
