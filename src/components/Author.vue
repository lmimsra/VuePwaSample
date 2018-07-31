<template>
    <div>
        <article class="message is-dark">
            <div class="message-header">
                <p>Author</p>
            </div>
            <div class="message-body">
                <p>作成者：LiMa</p>
                <p>フレームワーク：Vue.js 2.5.16</p>
                <p>CSS：Bulma 0.7.1</p>
                <p>他：PWA, vue-cli 3.0.0-rc.3</p>
                <p>突貫なのでAPIとか何も繋がっていませんあしからず・・・・</p>
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