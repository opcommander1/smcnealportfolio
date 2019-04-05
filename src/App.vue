<template>
  <div id="app">
    <div id="nav">
    </div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }

}
</script>


<style>

</style>
