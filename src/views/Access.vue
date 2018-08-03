<template>
    <div>
        <p class="title">アクセス</p>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <article class="tile is-child">
                    <strong>電車</strong><br/>
                    JR〜線→〜駅→JR〜線〜行き<br/>
                    所要時間：１時間<br/>
                    <img :src="image"/>
                </article>
                <article class="tile is-child">
                    <strong>自家用車</strong><br/>
                    〜ICから〜へ→〜を右折<br/>
                    所要時間：１時間<br/>
                    <img :src="image"/>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Access",
        data() {
            return {
                image: require('../assets/logo.png')
            }
        }
    }
</script>

<style scoped>

</style>