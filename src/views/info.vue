<template>
    <div>
        <p class="title">インフォメーション</p>
        <p>BBQに関する情報を流していきます</p>
        <div>
            <div>
                <div v-for="(value,key) in this.$store.getters.eventInfo" v-bind:key="key">
                    <div class="notification mini-span is-success">{{value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info"
    }
</script>

<style scoped lang="scss">
    .mini-span {
        margin-bottom: 5px;
    }
</style>