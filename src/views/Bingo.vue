<template>
    <div>
        <p class="title">ビンゴ</p>
        <div v-if="bingo_arr !== null">
            今当たったのは・・・・<br/>
            <div v-for="(value,key) in bingo_arr" v-bind:key="key">
                <div class="top-num" v-if="key === 0">
                <span id="topicon" >{{value}}!</span>
                </div>
                <span class="title" v-if="key !== 0">{{value}}</span>
            </div>
        </div>
        <div v-else>
            <h1 class="title">
                ゲーム開始まで<br/>
                もう少々お待ちを！
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bingo",
        data(){
            return{
                bingo_length : null
            }
        },
        computed : {
            bingo_arr:function () {
                return this.$store.getters.bingoArray
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