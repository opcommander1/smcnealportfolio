<template>
  <footer class="info">
    <div class="back-bg black">
      <div class="container">
        <div class="row">
          <div class="col m3 s6">
            <img src="../../assets/forrealcodes.png" alt="That's For Real Codes Logo">
          </div>
          <div class="col m3 s6">
            <h5 class="title-link white-text">LINKS</h5>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://drive.google.com/open?id=1VYpviZlqysDQFm0Kq4jlkpoDfvplnyay">Resume</a></li>
              </ul>
          </div>
          <div class="col m3 s12">
            <h5 class="title-media white-text">MEDIA LINKS</h5>
              <ul class="media-list">
                <li><a href="https://www.linkedin.com/in/shereal-mcneal/" target="blank"><i class="fab fa-linkedin fa-w-14 fa-2x"></i></a></li>
                <li><a href="https://github.com/opcommander1/smcnealportfolio" target="blank"><i class="fab fa-github fa-w-14 fa-2x"></i></a></li>
              </ul>
          </div>
          <div class="col m3 s12">
            <h5 class="title-address white-text">ADDRESSES</h5>
              <ul class="address-list">
                <li class="white-text">Address: Kansas City, MO</li>
                <li class="white-text">Email: smcneal@forrealcodes.com</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {

    }
  }
}
</script>

<style>

.info{
  margin-top: -20px;
}

.info .back-bg {
   height: 100%;
}

.info .back-bg img {
  max-width: 100%;
}

.info .title-link {
  font-weight: 300;
}

.info li a {
  font-weight: 300;
  transition: color .3s ease-in-out;
}

.info li a:hover {
  color:#00bfa5
}

.info .title-media {
  font-weight: 300;
}

.info .media-list li {
  display: inline-block;
  padding-right: 5px;
}

.info .title-address {
  font-weight: 300;
}

.info .address-list li {
  font-weight: 300;
}
</style>


