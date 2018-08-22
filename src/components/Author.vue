<template>
    <div>
        <article class="message is-dark">
            <div class="message-header">
                <p>Author</p>
            </div>
            <div class="message-body">
                <p>app version 1.1.1(8/23)</p>
                <p>ホーム追加時のアイコン、faviconを作成</p>
                <p>作成者：近藤</p>
                <p>フレームワーク：Vue.js 2.5.16</p>
                <p>CSS：Bulma 0.7.1</p>
                <p>他：PWA, vue-cli 3.0.0-rc.3, firebase</p>
                <p>Authentication, RealTimeDatabase</p>
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