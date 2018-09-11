<template>
    <div>
        <p class="title">ログイン</p>
        <div class="columns is-centered">
            <div class="column is-half-tablet is-one-quarter-desktop">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="ID" v-model="userId"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Password" v-model="password"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control has-text-right">
                        <button class="button is-success full" @click="logIn">ログイン</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars */

    import firebase from 'firebase'

    export default {
        name: "Login",
        data() {
            return {
                userId: '',
                password: ''
            }
        },
        methods: {
            logIn: function () {
                firebase.auth().signInWithEmailAndPassword(this.userId + '@test.co.jp', this.password).then(
                    user => {
                        this.$router.push('/')
                    },
                    error => {
                        alert('Wrong ID or Password');
                        console.log(error);
                    }
                )
            }
        },

    }
</script>

<style scoped lang="sass">

</style>