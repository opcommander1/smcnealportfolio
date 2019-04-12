<template>
  <div id="app">
    <div id="nav">
    </div>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import About from '@/components/layout/About'
import Skills from '@/components/layout/Skills'
import Projects from '@/components/layout/Projects'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }

}
</script>


<style>

</style>
