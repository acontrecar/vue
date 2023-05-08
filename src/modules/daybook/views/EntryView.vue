<template lang="">
    <div class="entry-title d-felx justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold">{{day}}</span>
            <span class="mx-1">{{month}}</span>
            <span class="mx-2 fs-4 fw-light">{{year}}</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary ">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea
        v-model="entry.text"
        placeholder="¿Que sucedio hoy?"></textarea>
    </div>

    <Fab 
    icon="fa-save"/>

    <img 
    src="https://tecnologiasocial.org/wp-content/uploads/2020/07/Persona_pensando_en_el_futuro-768x576.jpg" 
    alt="entry-picture"
    class="img-thumbnail"
    >
</template>
<script>

import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear.js';

export default {
    
    props:{
        id:{
            type: String,
            required: true,
        }
    },

    components:{
        Fab : defineAsyncComponent(() => import('../components/FabComponent.vue')),
    },


    data(){
        return{
            entry: null,
        }
    },

    computed: {
         ...mapGetters('journal', ['getEntriesById']),

         day(){
            const {day} = getDayMonthYear(this.entry.date);
            return day;
         },

         month(){
            const {month} = getDayMonthYear(this.entry.date);
            return month;
         },

         year(){
            const {year} = getDayMonthYear(this.entry.date);
            return year;
         },
    },

    methods:{
        loadEntry(){
            const entry = this.getEntriesById(this.id);
            if(!entry){
                return this.$router.push({name: 'no-entry'});
            }

            this.entry = entry;
        }
    },

    created(){
        this.loadEntry();
    },

    watch:{
        id(){
            this.loadEntry();
        }
    }
}
</script>


<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>