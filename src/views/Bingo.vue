<template>
    <div>
        <h1>{{databaseSample}}</h1>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Bingo",
        data() {
            return {
                databaseSample: null,
                connection: null
            }
        },
        created: function () {
            this.connection = firebase.database().ref('/bingo')
            this.connection.on('value', snapshot => {
                this.databaseSample=snapshot.val()
            })
        }
    }
</script>

<style scoped>

</style>