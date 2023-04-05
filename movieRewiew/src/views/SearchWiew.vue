<script>
import SearchBar from '../components/SearchBar.vue';
export default{
    data() {
        return {
            type: this.$route.params.type
        }
        
    },
    components: { SearchBar }
}
</script>
<template>
    
    <SearchBar :type="this.type" />
    
</template>

<style>
</style>