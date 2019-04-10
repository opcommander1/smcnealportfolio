<template>
  <div id="app">
    <div id="nav">
    </div>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import About from '@/components/layout/About'
import Skills from '@/components/layout/Skills'
import Projects from '@/components/layout/Projects'
import Contact from '@/components/layout/Contact'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Skills,
    Projects,
    Contact
  }

}
</script>


<style>

</style>
