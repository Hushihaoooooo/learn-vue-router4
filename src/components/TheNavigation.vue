<template>
    <div id="nav">
        <router-link id="logo" to="/">Home</router-link>
        <router-link v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
           {{ destination.name }}
        </router-link>
    </div>
</template>

<script setup>
import dataSource from '@/data.json'
const destinations = dataSource.destinations


</script>

<style lang="css">
#nav .vue-school-active-link {
    color: red;
    border-bottom: 2px solid red;
    /* 设置底部边框。2px 指定了边框宽度为 2 像素，solid 指定了边框样式为实线，red 指定了边框颜色为红色。 */
}
</style>