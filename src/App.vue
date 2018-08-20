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
            <router-link to="/bingo">info</router-link>
        </nav>
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
            <router-link to="/bingo">info</router-link>
        </nav>
    </div>
</template>
<script>
    import Author from './components/Author'

    export default {
        name: 'App',
        components: {
            Author
        },
        data() {
            return {
                classObject: {
                    'nav-top-spacing': false
                }
            }
        },
        methods: {
            isTablet: function () {
                this.classObject["nav-top-spacing"] = window.matchMedia('(min-width: 769px)').matches;
            }
        },
        created: function () {
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
