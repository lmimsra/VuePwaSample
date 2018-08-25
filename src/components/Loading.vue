<template>
    <div id="loader-bg">
        <div id="loader">
            <img :src="pack_man" width="50" height="50"/><br/>
            <p id="message">ロード中....</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        data() {
            return {
                pack_man: require('../assets/loading.gif'),
            }
        }
    }
</script>

<style scoped lang="scss">
    #loader-bg{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 1;
    }
    #loader{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        margin-top: -100px;
        margin-left: -100px;
        text-align: center;
        color: #000;
        z-index: 2;
    }
    #message{
        z-index: 2;
    }
</style>