<template>
  <nav class="navbar">
    <ul>
      <li @click="scrollTo('landing')">
        <svg id="landingicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <path
            d="M299.8 577.9h-126c-13 0-25.5-2.6-37-9-24.2-13.4-37.9-33.8-40.8-61.4-.3-3.3-.4-6.7-.4-10V392.3c0-3.7 0-3.7-3.7-3.7-37.6-.4-71.7-29.7-77.4-66.8-4.3-27.8 3.2-51.9 23.2-72C105.4 182 173.2 114.3 240.9 46.5c13.9-13.9 30.3-22.2 49.8-24 26.3-2.4 49.1 5.1 68 24.1 46.6 46.8 93.4 93.5 140.2 140.2 20.5 20.4 41 40.8 61.4 61.2 6.9 6.9 12.9 14.4 17.3 23.1 14.9 29.5 10.6 64.8-11.2 89.7-15.6 17.9-35.5 27.2-59.3 27.7-2.7.1-3.1 1-3.1 3.4.1 37 .2 74 0 111-.2 35.6-27.9 67.8-63 73.7-5.4.9-10.9 1.3-16.4 1.3H299.8zm47.4-119.6c0-8.6-.1-17.2 0-25.7.1-10.9-3.9-20.2-11.5-27.6-14.9-14.5-32.8-17.9-52.2-11.9-19.1 5.9-30.9 21.7-31.1 40.5-.1 16.4-.1 32.8 0 49.2.1 11 3.8 20.6 11.5 28.5 16 16.5 42.8 19.8 62.6 7.6 13.6-8.4 21.1-20.4 20.8-36.8-.2-8-.1-15.9-.1-23.8z" />
        </svg>
      </li>
      <li @click="scrollTo('about')">
        <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <path
            d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z">
          </path>
        </svg>
      </li>
      <li @click="scrollTo('contact')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
          viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
          <path
            d="M64.156,3.103H34.145c-8.202,0-14.846,6.648-14.846,14.849v63.245c0,8.205,6.644,14.848,14.846,14.848    h30.012C72.354,96.044,79,89.401,79,81.196V17.951C79,9.751,72.354,3.103,64.156,3.103z M49.148,88.944    c-2.496,0-4.518-2.024-4.518-4.52c0-2.497,2.021-4.519,4.518-4.519c2.495,0,4.516,2.021,4.516,4.519    C53.664,86.92,51.644,88.944,49.148,88.944z M73.352,66.354c0,4.275-3.47,7.747-7.744,7.747H32.69    c-4.278,0-7.745-3.472-7.745-7.747V27.31c0-4.277,3.467-7.75,7.745-7.75h32.917c4.274,0,7.744,3.473,7.744,7.75V66.354z" />
        </svg>
      </li>
    </ul>
    <div class="arrow-button" :class="{ flipped: isLastSection }" @click="scrollToNextSection">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0f0f0"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v13m7-6l-7 7-7-7" />
      </svg>
    </div>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  data() {
    return {
      isLastSection: false,
      arrowButtonClicked: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollTo(section) {
      VueScrollTo.scrollTo(`#${section}`, 500, { easing: 'ease-in-out' })
    },
    scrollToNextSection() {
      this.arrowButtonClicked = true
      const sections = ['landing', 'about', 'contact']
      const distances = sections.map(section => {
        const distance = Math.round(document.getElementById(section).getBoundingClientRect().top)
        return distance > 0 ? distance : Infinity // Ignore negative distances
      })
      const closestSectionIndex = distances.findIndex(distance =>
        distance === Math.min(...distances)
      )
      const nextSectionIndex = (closestSectionIndex) % sections.length
      const nextSection = sections[nextSectionIndex]
      if (nextSection) {
        this.isLastSection = nextSectionIndex === sections.length - 1
        VueScrollTo.scrollTo(`#${nextSection}`, 500, { easing: 'ease-in-out' })
      }
      setTimeout(() => {
        this.arrowButtonClicked = false
      }, 500)
    },
    handleScroll() {
      if (this.arrowButtonClicked) {
        return
      }
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY || window.pageYOffset
      this.isLastSection = scrollPosition >= documentHeight - windowHeight
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #f0f0f0;
  /* Add other styling as needed */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar ul {
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  fill: whitesmoke
}

.navbar li {
  height: 24px;
  width: 24px;
  padding: 15px 20px;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  border-radius: 15px;
  background-color: var(--nicegray);
}

.arrow-button {
  padding: 15px;
  cursor: pointer;
  border-radius: 15px;
  background-color: var(--nicegray);
  transition: transform 0.3s;
}

.arrow-button.flipped {
  transform: rotate(180deg);
}
</style>
