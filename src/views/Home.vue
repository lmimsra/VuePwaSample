<template>
  <div class="home">
    <img src="../assets/logo.png"><br/>
    <font-awesome-icon icon="user"/>
    <font-awesome-icon icon="coffee"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span class="tag is-black">Black</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    computed:{
    }
}
</script>
