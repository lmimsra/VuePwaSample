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
        <!--小サイズ-->
        <div class="is-hidden-tablet">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.4187313393704!2d139.84634351558734!3d35.96118692217389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018bd36becff399%3A0xb8139d4e2d01b38c!2z5riF5rC05YWs5ZyS44Kt44Oj44Oz44OX5aC0!5e0!3m2!1sja!2sjp!4v1533455570275"
                    width="300" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <!--中サイズ-->
        <div class="is-hidden-mobile is-hidden-desktop">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.4187313393704!2d139.84634351558734!3d35.96118692217389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018bd36becff399%3A0xb8139d4e2d01b38c!2z5riF5rC05YWs5ZyS44Kt44Oj44Oz44OX5aC0!5e0!3m2!1sja!2sjp!4v1533455570275"
                    width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <!--大サイズ-->
        <div class="is-hidden-touch">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.4187313393704!2d139.84634351558734!3d35.96118692217389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018bd36becff399%3A0xb8139d4e2d01b38c!2z5riF5rC05YWs5ZyS44Kt44Oj44Oz44OX5aC0!5e0!3m2!1sja!2sjp!4v1533455570275"
                    width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
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