<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
    // // 创建 worker
    // const myWorker = new Worker('/static/worker.js')

    // // 向 worker 传递信息
    // myWorker.postMessage('Hello!can you hear me?')

    // // 接收从 worker 传递过来的信息
    // myWorker.onmessage = function (e) {
    //   console.log(e.data)
    // }

    // console.log(navigator)
    // if ('serviceWorker' in navigator) {
    //   // 指定cache storage只在origin下的/a/b路径下生效，类似cookie的domain
    //   navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    //     //  navigator.serviceWorker.register('/a/b/sw.js')，与上面意思相同
    //     console.log('ServiceWorker registration successful with scope: ', registration.scope)
    //   }).catch(function (err) {
    //     console.log('ServiceWorker registration failed: ', err)
    //   })
    // }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
