<template>
  <div id="app">
    <div id="nav">
    </div>
    <Navbar />
    <About />
    <Skills />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import About from '@/components/layout/About'
import Skills from '@/components/layout/Skills'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Skills
  }

}
</script>


<style>

</style>
