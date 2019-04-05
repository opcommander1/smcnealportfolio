<template>
 <div class="navbar">
   <nav class="black">
     <div class="container">
       <ul class="left">
         <li><a href="">About</a></li>
         <li><a href="">Skills</a></li>
         <li><a href="">Projects</a></li>
         <li><a href="">Contact</a></li>
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
font-size: 20px;
font-weight: 300;
transition: color .3s ease-in-out;
}

.navbar li a:hover{
color:#00eeff
}

</style>


