<template>
<section class="projects" id="projects">
  <div class="container">
    <h1 class="black-text center">Projects</h1>
    <div class="row">
      <ul v-if="projects">
        <li v-for="(project, index) in projects" :key="index" class="project-lists">
          <div class="col m4 s10 offset-s1">
            <div class="card medium sticky-action">
              <div class="card-image">
                <img class="activator" v-bind:src="project.img" alt="No display">
              </div>
              <div class="card-content">
                  <span class="card-title activator teal-text">{{ project.title }}<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-action">
                <p><a class="teal-text" v-bind:href="project.applink" target="blank">APP LINK</a></p>
                <p><a class="teal-text" v-bind:href="project.githublink" target="blank">GITHUB</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title"><i class="material-icons right">close</i></span>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
  
</template>

<script>
export default {
  name: 'Projects',
  data(){
    return {
      projects: [{
        activator: "activator",
        img: require("../../assets/ecosystems.png"),
        title: "ECO HEALTH SYSTEMS",
        applink: "https://ecohealthsystems.forrealcodes.com/",
        githublink: "https://github.com/opcommander1/ecohealthsystem",
        description: "Eco Health Systems is a in-house business application that helps employees to keep track of appointments. This appointment scheduler is built on node js, rest API routing, npm node packages, mysql database, passport login system, html, css and ejs template engine."
        },
        {
        img: require("../../assets/idareworldscreenshot.jpg"),
        title: "IDARE@, INC",
        applink: "https://www.idare.forrealcodes.com/",
        githublink: "https://github.com/opcommander1/idare",
        description: "The purpose of the site is to educate people on disaster preparedness. The coding behind the design is, html, css, javascript, php, and bootstrap and then converted to Wordpress."
        },
        {
        img: require("../../assets/quickmovies.png"),
        title: "QUICK MOVIES",
        applink: "https://www.quickmovies.online/",
        githublink: "https://github.com/opcommander1/moviepicks",
        description: "This site give quick details on specific movies without the extras. Top three actors, movie title, overview description, year release date, rating genres and similar films. Technology used, node js, api, html, css, javascript ES6, classes, webpack, axiom, npm and git."
        },
        {
        img: require("../../assets/imsocialthumbnail.png"),
        title: "I'M SOCIAL",
        applink: "https://www.imsocial.forrealcodes.com/",
        githublink: "https://github.com/opcommander1/im-social",
        description: "I'm social is a design concept for social media purposes. The coding includes html, css and mobile responsiveness."
        },
        {
        img: require("../../assets/earfullthumbnail.png"),
        title: "EARFULL HEADPHONES",
        applink: "https://www.earfullheadphones.forrealcodes.com/",
        githublink: "https://github.com/opcommander1/EarFull-Headphones",
        description: "Earfull headpones is a landing page design, which the customers first see when coming to the page. The coding used in this project is html, css and mobile responsiveness. The idea behind the project is to bring interest to customers with various popular products that the store presents."
        },
        {
        img: require("../../assets/thatsforrealmusic.png"),
        title: "THAT'S FOR REAL MUSIC",
        applink: "https://www.thatsforrealmusic.com/",
        githublink: "https://github.com/opcommander1/thatsforrealmusic",
        description: "That's For Real Music is a Full Stack Application that teaches customers how to learn to play the piano.  The includes vue js, html, css, javascript, rest api, axios, node js, mysql, jwt tokens and bcrypt."
        },
      ]
    }
  }
}
</script>

<style>
.projects h1{
  font-weight: 300;
}
.projects .card-title {
  font-size: 16px;
}

</style>


