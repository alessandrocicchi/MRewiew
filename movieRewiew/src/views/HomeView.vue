<script>
import Page1Film from './Page1Film.vue';
import { RouterLink } from 'vue-router';
export default{
    data() {
        return {
        }
        
    },
    components: { Page1Film }
}
</script>
<template>
    <div style="background-image: linear-gradient(to left, black, lightslategray);padding-bottom: 400px;margin-left: -350px;width:1950px; font-family: cursive;">
        <div class="row">
            <div class="col-6">
                <RouterLink :to="{ name: 'cards', params: { type: 'movie' } }">
                    <button type="button" class="btn btn-outline-light" style="height: 230px;width: 260px;font-size:larger;font-weight: bold;margin-top: 300px;margin-left: 450px;">MOVIE</button>
                </RouterLink>
            </div>
            <div class="col-6">
                <RouterLink :to="{ name: 'cards', params: { type: 'tv' } }">
                    <button type="button" class="btn btn-outline-light" style="height: 230px;width: 260px;font-weight: bold;font-size:larger;margin-top: 300px;">TV SERIES</button>
                </RouterLink>
            </div>
        </div>
        
    </div>
</template>

<style>
</style>