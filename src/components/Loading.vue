<template>
    <div>
        <img :src="pack_man"/>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        data(){
            return{
                pack_man : require('../assets/loading.gif'),
                meat : require('../assets/camp_map_02.png')
            }
        }
    }
</script>

<style scoped>

</style>