<template>
  <section class="about" id="about">
    <div class="about-backgd">
      <div class="backgd-blurr">
      <div class="container">
        <!-- <img src="assets/aboutbg.png" alt="" class="responsive-img"> -->
        <h1 class="white-text center">About</h1>
          <div class="row">
            <h2 class="first-name col sm12" style="font-size:5vw"><span class="red-text">S</span>
            <span class="blue-text darken-1">H</span>
            <span class="deep-purple-text darken-1">E</span>
            <span class="teal-text darken-1">R</span>
            <span class="green-text darken-1">E</span>
            <span class="deep-orange-text">A</span>
            <span class="yellow-text accent-3">L</span></h2>
         </div>
          <div class="row">
            <h2 class="last-name col m1 s1" style="font-size:5vw"><span class="red-text">M</span>
            <span class="blue-text darken-1">C</span>
            <span class="deep-purple-text darken-1">N</span>
            <span class="teal-text darken-1">E</span>
            <span class="green-text darken-1">A</span>
            <span class="deep-orange-text">L</span></h2>
            <img src="../../assets/forrealcodes.png" alt="That's For Real Codes" class="col s5">
            <p class="summary col m5 s12 deep-orange-text">Hi I am FULL STACK WEB DEVELOPER with an Associate degree in Computer Engineering Technology.  I love figuring out solutions and building applications from front and backend to serve my client's needs.  My many years in legal gave me the vast opportunity to be experience in many databases and technologies.  Therefore, if you're looking for a hard working, dedicated, good team player, and willing to tackle any problem, I am the person for you!</p>
          </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data(){
    return {

    }
  }
}
</script>

<style>
.about-backgd {
  background: url("../../assets/aboutbg.png");
}

.about-backgd .backgd-blurr {
background: rgba(0, 0, 0, 0.5);
}

.about-backgd h1 {
  margin: 0;
  padding-top: 35px;
  font-weight: 300;
}

.about-backgd .first-name {
  margin-bottom: -32px;
}
.about-backgd .first-name span {
  padding-right: 25px;
}

.about-backgd .last-name span{
  display: block;
}

.about-backgd img {
  min-width: 250px;
  -webkit-animation-name: flip;
  -webkit-animation-duration: 500ms;
  -webkit-animation-iteration-count: 5;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: flip;
  -moz-animation-duration: 500ms;
  -moz-animation-iteration-count: 5;
  -moz-animation-timing-function: linear;
  -ms-animation-name: flip;
  -ms-animation-duration: 500ms;
  -ms-animation-iteration-count: 5;
  -ms-animation-timing-function: linear;
  -o-transition: rotate(3600deg);
}

.about-backgd .summary{
  background: rgba(0, 0, 0, 0.4);
  font-size: 1.1em;
  text-align: center;
  border-radius: 10px;
}

@-moz-keyframes flip {
    from { -moz-transform: rotateY(0deg); }
    to { -moz-transform: rotateY(360deg); }
}
@-webkit-keyframes flip {
    from { -webkit-transform: rotateY(0deg); }
    to { -webkit-transform: rotateY(360deg); }
}
@keyframes flip {
    from {transform:rotateY(0deg);}
    to {transform:rotateY(360deg);}
}

</style>

