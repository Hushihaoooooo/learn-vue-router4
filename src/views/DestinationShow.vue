<!-- <template>
    <section class="destination">
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
    </section>
  </template>
  <scrip>
  import sourceData from '@/data.json'
  export default {
    computed:{
      destinationId(){
        return parseInt(this.$route.params.id)
      },
      destination(){
        return sourceData.destinations.find(destination => destination.id === this.destinationId)
      }
    }
  }
  </script> -->
<template>
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
</script>
