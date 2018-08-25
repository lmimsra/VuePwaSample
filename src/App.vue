<template>
    <div id="app" class="nav-bottom-spacing" v-bind:class="classObject">
        <nav class="navbar is-fixed-top is-success nav-origin is-hidden-mobile is-block">
            <router-link to="/">概要</router-link>
            |
            <router-link to="/timetable">タイムテーブル</router-link>
            |
            <router-link to="/access">アクセス</router-link>
            |
            <router-link to="/bingo">ビンゴ</router-link>
            |
            <router-link to="/info">info</router-link>
        </nav>
        <Loading v-if="is_loading"/>
        <div class="spacing">
            <router-view/>
        </div>
        <author/>
        <nav class="navbar is-fixed-bottom is-success nav-origin is-hidden-tablet">
            <router-link to="/">概要</router-link>
            |
            <router-link to="/timetable">タイムテーブル</router-link>
            |
            <router-link to="/access">アクセス</router-link>
            |
            <router-link to="/bingo">ビンゴ</router-link>
            |
            <router-link to="/info">info</router-link>
        </nav>
    </div>
</template>
<script>
    import Author from './components/Author'
    import Loading from './components/Loading'
    import {authConfig} from './config/firebaseConfig'
    import firebase from 'firebase'
    import {importantInfo, infosList, bingo} from './config/realTimeDatabase'

    export default {
        name: 'App',
        components: {
            Author,
            Loading
        },
        data() {
            return {
                classObject: {
                    'nav-top-spacing': false
                },
                is_loading:true
            }
        },
        methods: {
            isTablet: function () {
                this.classObject["nav-top-spacing"] = window.matchMedia('(min-width: 769px)').matches;
            }
        },
        mounted: function () {
            console.log("mounted")
            if (!firebase.apps.length) {
                firebase.initializeApp(authConfig);
            }
            importantInfo.on('value', snapshot => {
                this.$store.state.important = snapshot.val()
            })
            infosList.on('value', snapshot => {
                this.$store.state.info = snapshot.val()
            })
            bingo.on('value', snapshot => {
                this.$store.state.bingo = snapshot.val()
            })
        },
        updated:function(){
           this.is_loading=false
        },
        created: function () {
            console.log("created")
            // コンポーネント作成時に実行
            this.isTablet()
            window.addEventListener('resize', this.isTablet)
        },
        beforeDestroy: function () {
            // コンポーネント破棄時に実行
            window.removeEventListener('resize', this.isTablet)
        }
    }
</script>
<style lang="scss">
    @import "~bulma/bulma";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .nav-origin {
        text-align: center;
        padding: 30px 5px 30px 5px;

        a {
            font-weight: bold;
            color: white;
        }
        a.router-link-exact-active {
            color: black;
        }

    }

    .spacing {
        margin: 10px 0;
    }

    .nav-bottom-spacing {
        padding: 20px 20px 85px 20px;
    }

    .nav-top-spacing {
        padding: 85px 20px 20px 20px;
    }
</style>
