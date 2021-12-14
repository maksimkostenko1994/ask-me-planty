<template>
  <div id="nav">
    <div class="nav-logo"><router-link to="/">AMP</router-link></div>
    <div class="nav-menu">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/sign-in">Sign In</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav {
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid teal;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-menu {
  margin-left: auto;
}

.nav-logo a {
  text-decoration: none;
  color: black !important;
  font-size: 25px;
}
</style>
