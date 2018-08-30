<template>
    <div>
        <p class="title">ビンゴ？(仮)</p>
        <div v-if="this.$store.getters.bingoArray !== null">
            今当たったのは・・・・<br/>
            <!--<div class="top-num">-->
                <!--<span id="topicon"><b>{{this.$store.getters.bingoArray[0]}}!</b></span>-->
            <!--</div>-->
            <div v-for="(value,key,index) in this.$store.getters.bingoArray" v-bind:key="key">
                <div class="top-num" v-if="index === 0">
                <span id="topicon" >{{value}}!</span>
                </div>
                <span class="title" v-if="index !== 0">{{value}}</span>
            </div>
        </div>
        <div v-else>
            <h1 class="title">
                準備中！<br/>
                もう少々お待ちを！
            </h1>
            と言いつつ時々数字出ます
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bingo",
        computed : {
            bunm:function () {
                var array1 = this.$store.getters.bingoArray
                return array1.reverse
            }

        }
    }
</script>

<style scoped lang="scss">
    #topicon {
        border-radius: 50%;
        background-color: crimson;
        padding: 10px;
        margin: 10px 0;
        font-size: xx-large;
        color: white;
    }

    .top-num {
        margin: 10px 0;
    }
</style>