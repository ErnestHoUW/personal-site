<template>
  <div id="app">
    <Landing id="landing" />
    <Experiences id="experiences" />
    <About id="about" />
    <Contact id="contact" />
    <Navbar />
  </div>
</template>

<script>
import Landing from './components/Landing.vue';
import Experiences from './components/Experiences.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Navbar from './components/Navbar.vue';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Landing,
    Experiences,
    About,
    Contact,
    Navbar,
  },
  directives: {
    scrollTo: VueScrollTo.scrollTo,
  },
};
</script>

<style>
/* Global styles go here */
</style>