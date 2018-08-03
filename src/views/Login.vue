<template>
    <div>
        <p class="title">ログイン</p>
        <input type="text" placeholder="ID" v-model="userId"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button @click="logIn">ログイン</button>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data() {
            return {
                userId: '',
                password: ''
            }
        },
        methods:{
            logIn:function () {
                firebase.auth().signInWithEmailAndPassword(this.userId+'@test.co.jp',this.password).then(
                    user=>{
                        alert('Login Success');
                        console.log(user.user);
                    },
                    error=>{
                        alert('Wrong ID or Password');
                        console.log(error);
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>