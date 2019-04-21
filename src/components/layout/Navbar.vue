<template>
 <div class="navbar">
   <nav class="black">
     <div class="container">
       <a href="#" data-target="mobile-resp" class="sidenav-trigger"><i class="material-icons">menu</i></a>
       <ul class="left hide-on-med-and-down">
         <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
   </nav>
      <ul class="sidenav" id="mobile-resp">
            <li><a class="sidenav-close" href="#about">About</a></li>
            <li><a class="sidenav-close" href="#skills">Skills</a></li>
            <li><a class="sidenav-close" href="#projects">Projects</a></li>
            <li><a class="sidenav-close" href="#contact">Contact</a></li>
      </ul>
 </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {

    }
  }
}

</script>

<style>

.navbar li a{
font-size: 20px;
font-weight: 300;
transition: color .3s ease-in-out;
}

.container {
  width: 80%;
}

.navbar li a:hover{
color:#00bfa5
}

</style>


