<template>
    <div>
        今当たったのは・・・・<br/>
        <div class="top-num">
            <span id="topicon">{{bingoNum[0]}}!</span>
        </div>
        <h1>{{bingoNum}}</h1>

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
                this.bingoNum = snapshot.val().reverse()
                this.len = this.bingoNum.length
                console.log(this.bingoNum)
                console.log(this.len)

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
    }
    .top-num{
        margin: 10px 0;
    }
</style>