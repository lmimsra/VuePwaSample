<template>
    <div>
        <p class="title">ビンゴ？(仮)</p>
        <div v-if="bingoNum !== null">
            今当たったのは・・・・<br/>
            <div class="top-num">
                <span id="topicon"><b>{{bingoNum[0]}}!</b></span>
            </div>
            <div v-for="(value,key) in bingoNum" v-bind:key="key">

                <span class="title" v-show="key!==0">{{value}}</span>
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
    import firebase from 'firebase'

    export default {
        name: "Bingo",
        data() {
            return {
                bingoNum: null,
                connection: null,
                len: null
            }
        },
        created: function () {
            this.connection = firebase.database().ref('/bingo')
            this.connection.on('value', snapshot => {
                this.bingoNum = snapshot.val()
                if (this.bingoNum !== null) {
                    this.bingoNum.reverse()
                    this.len = this.bingoNum.length
                }
                // console.log(this.bingoNum)
                // console.log(this.len)

            })
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