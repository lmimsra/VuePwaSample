<template>
    <div id="app" class="section">
        <!--<div id="nav">-->
            <!--<router-link to="/">Home</router-link> |-->
            <!--<router-link to="/about">About</router-link> |-->
            <!--<router-link to="/">概要</router-link>-->
            <!--|-->
            <!--<router-link to="/timetable">タイムテーブル</router-link>-->
            <!--|-->
            <!--<router-link to="/access">アクセス</router-link>-->
        <!--</div>-->
        <p>この辺に画像</p>
        <div class="spacing">
            <router-view/>
        </div>
        <author/>
        <nav id="nav" class="navbar is-fixed-bottom is-success">
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

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: white;
    }

    #nav a.router-link-exact-active {
        color: black;
    }

    .spacing {
        margin: 10px 0;
    }
</style>
