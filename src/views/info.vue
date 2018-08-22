<template>
    <div>
        <p class="title">インフォメーション</p>
        <p>BBQに関する情報を流していきます</p>
        <div>
            <div>
                <div v-for="(value,key) in infos" v-bind:key="key">
                    <div class="notification mini-span is-success">{{value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "info",
        data() {
            return {
                infos: null
            }
        },
        created: function () {
            var connection = firebase.database().ref('/info/infos')
            connection.on('value', snapshot => {
                this.infos = snapshot.val()
                // console.log(this.infos)
                if (this.infos !== null) this.infos.reverse()
            })
        }
    }
</script>

<style scoped lang="scss">
    .mini-span {
        margin-bottom: 5px;
    }
</style>