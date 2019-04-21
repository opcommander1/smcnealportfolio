<template>
  <section class="skills" id="skills">
    <div class="container">
      <h1 class="Black-text center">Skills</h1>
      <div class="row">
        <div class="col m12 s12 center">
        <ul class="skills-listleft col m3 s12">
          <li><a @mouseover="backend" @mouseout="displaynone" class="blue darken-1 btn-large">BACKEND</a></li>
          <li><a @mouseover="frontend" @mouseout="displaynone" class="deep-purple darken-1 btn-large">FRONT END</a></li>
          <li><a @mouseover="sourcecontrols" @mouseout="displaynone" class="deep-orange btn-large">SOURCE CONTROL</a></li>
        </ul>
        <div class="macbook-img col m6 s12">
          <img src="../../assets/macbookpro1.png" alt="No Display">
          <ul class="skills-display white-text">
            <li v-for="(skill, index) in results" :key="index">{{ skill }}</li> 
          </ul>
        </div>
        <ul class="skills-listright col m3 s12">
          <li><a @mouseover="framework" @mouseout="displaynone" class="teal btn-large">FRAMEWORKS</a></li>
          <li><a @mouseover="ui" @mouseout="displaynone" class="pink darken-4 btn-large">UI/UX</a></li>
          <li><a @mouseover="databases" @mouseout="displaynone" class="brown darken-4 btn-large">DATABASES</a></li>
        </ul>
        </div>
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
        this.results = ['PHP', 'Node JS', 'Rest Api']
      },
      frontend(){
        this.show = true
        this.results = ['HTML5', 'CSS', 'Javascript', 'ES6']
      },
      framework(){
        this.show = true
        this.results = ['Vue JS', 'Express JS', 'Bootstrap', 'Jquery', 'Materialize']
      },
      databases(){
        this.show = true
        this.results = ['Mysql', 'MyphpAdmin', 'Firebase']
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

 /* .skills .skills-listleft {
   margin-right: -22px;
 } */

 .skills .skills-listleft li{
   font-weight: 300;
   padding-bottom: 10px;
 }

 .skills .macbook-img {
   position: relative;

 }

  .skills .macbook-img img{
   width: 100%;
 }

 .skills .macbook-img .skills-display {
   position: absolute;
   top: 2px;
   right: 1%;
   font-size: 1.2em;
   text-align: center;
   width: 100%;
 }

  .skills .skills-listright li {
   padding-bottom: 10px;
   font-weight: 300;
 }

  @media screen and (max-width: 780px) {
    .skills .macbook-img .skills-display {
    font-size: 1.0em;
 }
}

  @media screen and (max-width: 695px) {
    .skills .macbook-img .skills-display {
    font-size: 0.9em;
 }
}

  @media screen and (max-width: 600px) {
    .skills .macbook-img .skills-display {
    font-size: 1.2em;
 }
}

  @media screen and (max-width: 460px) {
    .skills .macbook-img .skills-display {
    font-size: 0.9em;
 }
}
</style>


