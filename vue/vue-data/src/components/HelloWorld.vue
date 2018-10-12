<template>
  <div class="hello">
    <ul>
      <li><router-link to="/home">主页</router-link></li>
      <li><router-link to="/user">设计</router-link></li>
      <li><router-link to="/panduan">判断</router-link></li>
      <li><router-link to="/shenhe">审核</router-link></li>
      <li><router-link to="/juece">决策</router-link></li>
    </ul>
    <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
       <router-view class="animated"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
