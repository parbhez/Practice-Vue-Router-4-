<template>

<div id="nav">

<!-- Static Route define -->
 <!-- <router-link to="/">Home</router-link> 
 <router-link to="/brazil">Brazil</router-link>
 <router-link to="/hawaii">Hawaii</router-link>
 <router-link to="/jamaica">Jamaica</router-link>
 <router-link to="/panama">Panama</router-link>
  -->

  <!-- Define Dynamic Route  -->
<router-link id="Logo" to="/">Home</router-link>
  <router-link 
                v-for="destination in destinations" 
                :key="destination.id"
                :to="{ name:'destination.show', params:{id: destination.id,slug: destination.slug}}"
            >
            {{ destination.name }}
    </router-link>


 </div>

</template>

<script>
    import sourceData from '@/data.json'
    export default {
        data(){
            return {
                destinations: sourceData.destinations
            }
        }
    }
</script>

<style lang="css">
#nav .nav-active-class{
    color: brown;
    border-bottom: 2px solid brown;
}
</style>