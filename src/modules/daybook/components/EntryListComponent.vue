<template lang="">
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Search...">
        </div>

        <div class="entry-scrollarea">
            <Entry 
            v-for="item in 100" 
            :key="item"
            />

        </div>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue';

export default {
    components:{
        Entry: defineAsyncComponent(() => import('./EntryComponent.vue'))
    }
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