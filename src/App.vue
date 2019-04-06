<template>
  <div id="app">
    <div id="nav">
    </div>
    <Navbar />
    <About />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import About from '@/components/layout/About'

export default {
  name: 'App',
  components: {
    Navbar,
    About
  }

}
</script>


<style>

</style>
