<template>
  <section class="skills">
    <div class="container">
      <h1 class="Black-text center">Skills</h1>
      <div class="row">
        <ul class="skills-listleft col s4">
          <li><a @mouseover="backend" @mouseout="displaynone" class="blue darken-1 btn-large">BACKEND</a></li>
          <li><a @mouseover="frontend" @mouseout="displaynone" class="deep-purple darken-1 btn-large">FRONT END</a></li>
          <li><a @mouseover="sourcecontrols" @mouseout="displaynone" class="deep-orange btn-large">SOURCE CONTROL</a></li>
        </ul>
        <div class="macbook-img col s4">
          <img src="../../assets/macbookpro1.png" alt="">
          <ul class="skills-display white-text">
            <li v-for="(skill, index) in results" :key="index">{{ skill }}</li> 
          </ul>
        </div>
        <ul class="skills-listright col s4">
          <li><a @mouseover="framework" @mouseout="displaynone" class="teal btn-large">FRAMEWORKS</a></li>
          <li><a @mouseover="ui" @mouseout="displaynone" class="pink darken-4 btn-large">UI/UX</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return {
      show: false,
      results: []  
    }
  },
  methods: {
      sourcecontrols(){
        this.show = true
        this.results = ['Git', 'Github']
      },
      backend(){
        this.show = true
        this.results = ['Mysql', 'MyphpAdmin', 'PHP', 'Node JS', 'Rest Api', 'Firebase']
      },
      frontend(){
        this.show = true
        this.results = ['HTML5', 'CSS', 'Javascript', 'Jquery']
      },
      framework(){
        this.show = true
        this.results = ['Vue JS', 'Express JS', 'Bootstrap', 'Jquery', 'Materialize']
      },
       ui(){
        this.show = true
        this.results = ['Abobe Photoshop']
      },
      displaynone(){
        this.show = false
        this.results = []
      },

  }
}
</script>

<style>
 .skills h1 {
   font-weight: 300;
 }

 .skills .skills-listleft {
   margin-right: -22px;
 }

 .skills .skills-listleft li{
   margin-bottom: 15px;
   font-weight: 300;
 }

 .skills .macbook-img {
   position: relative;
 }

 .skills .macbook-img img {
  width: 368px;
  margin-left: -32px;
 }

 .skills .macbook-img .skills-display {
   position: absolute;
   top: 2px;
   right: 23%;
   font-size: 1.2em;
   text-align: center;
   width: 100px;
 }

 .skills .skills-listright {
   padding-left: 82px;
 }

  .skills .skills-listright li {
   margin-bottom: 15px;
   font-weight: 300;
 }
</style>


