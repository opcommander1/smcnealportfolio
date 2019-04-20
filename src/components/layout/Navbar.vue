<template>
 <div class="navbar">
   <nav class="black">
     <div class="container">
       <ul class="left">
         <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
   </nav>
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
font-size: 3.1vw;
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


