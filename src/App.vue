<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Mhd </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <router-link to="/" class=" nav-link active">Home</router-link> 
        </li>
        <li class="nav-item">
    <router-link to="/about" class="nav-link ">About</router-link>
        </li>
        <li class="nav-item">
    <router-link to="/contact" class="nav-link ">Contactez-nous</router-link>
        </li>
        <li class="nav-item">
    <router-link to="/command" class="nav-link ">Commander</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*
nav {
  padding: 30px ;
}

nav a {
  font-weight: bold;
  color: #4795e3;
  padding-left: 30px; 
  padding-top: 15px;
    padding-left: 15px;

}
nav a:hover{
  background-color: aqua;
  color: azure;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
nav a.router-link{  text-decoration: none;
}

</style>
