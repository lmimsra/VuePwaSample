<template>
    <div>
        <article class="message is-dark">
            <div class="message-header">
                <p>Author</p>
            </div>
            <div class="message-body">
                <p>app version 2.0.0(8/31)</p>
                <p>画面の内容変更</p>
                <p>firebase連携部分を修正</p>
                <p>作成者：Lima</p>
                <p>フレームワーク：Vue.js 2.5.16</p>
                <p>CSS：Bulma 0.7.1</p>
                <p>他：PWA, Vuex, vue-cli 3.0.0-rc.3, firebase</p>
                <p>Authentication, RealTimeDatabase, Hosting</p>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "Author"
    }
</script>

<style scoped lang="scss">
    #author {
        background-color: lightgrey;
    }
</style>