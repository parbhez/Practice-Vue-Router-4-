<template>

    <section class="destination" v-if="destination">
        <h1>{{ destination.name }}</h1>

        <GoBack />
       
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script>
    import sourceData from '@/data.json'
    import GoBack from '@/components/GoBack.vue'
    export default {

        components: {
            GoBack
        },
        props: {
            id:{
                type: String,
                required: true
            }
        },
        // data(){
        //     return {
        //         destination: null
        //     }
        // },

        computed:{
        // destinationId(){
        //     return parseInt(this.$route.params.id);
        // },

        destination(){
           //return sourceData.destinations.find(destination=>destination.id === this.destinationId)
           return sourceData.destinations.find(destination=>destination.id === parseInt(this.id))
        },
        },

    //     methods:{
    //         async initData(){
    //             const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //             this.destination = await response.json()

    //         }
    //     },
    //     //Real time data fetch in api
    //     async created(){
    //         // const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //         // this.destination = await response.json()

    //         this.initData();

    //         // this.$watch( 
    //         //     ()=> this.$route.params,
    //         //     // async ()=>{
    //         //     //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //         //     //     this.destination = await response.json()
    //         //     // }

    //         //     this.initData
    //         // )
    //     }
    }
</script>