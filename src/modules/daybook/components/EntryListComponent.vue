<template lang="">
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
            type="text" 
            class="form-control" 
            placeholder="Search..."
            v-model="term">
        </div>

        <div class="entry-scrollarea">
            <Entry 
            v-for="entry in entriesByTerm" 
            :key="entry.id"
            :entry="entry"
            />

        </div>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue';
    import {mapGetters} from 'vuex';

export default {
    components:{
        Entry: defineAsyncComponent(() => import('./EntryComponent.vue'))
    },

    computed:{
        ...mapGetters('journal', ['getEntriesByTerm']),
        entriesByTerm(){
            return this.getEntriesByTerm(this.term);
        }
    },

    data(){
        return{
            term: ''
        }
    },

}
</script>
<style lang="scss" scoped>
    .entry-list-container{
        background-color: #f5f5f5;
        height: calc(100vh - 64px);
        display: flex;
        flex-direction: column;
    }

    .entry-scrollarea{
        flex: 1;
        overflow-y: auto;
        height: calc(100vh - 110px);
    }
</style>