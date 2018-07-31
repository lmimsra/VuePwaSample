<template>
    <div id="app" class="nav-spacing">
        <!--<nav class="navbar is-fixed-top is-success nav-origin">-->
        <!--<router-link to="/">概要</router-link>-->
        <!--|-->
        <!--<router-link to="/timetable">タイムテーブル</router-link>-->
        <!--|-->
        <!--<router-link to="/access">アクセス</router-link>-->
        <!--</nav>-->
        <p>この辺に画像</p>
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
                width: window.innerWidth
            }
        },
        computed: {
            isDesktop: () => {
                return window.matchMedia('(min-width: 1024px)').matches;
            }
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
        padding: 30px;
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

    .nav-spacing {
        padding: 20px 20px 85px 20px;
    }
</style>
