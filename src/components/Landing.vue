<template>
    <section class="landing">
        <div class="logo-container">
            <svg id="logoE" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 150" width="105"
                height="150">
                <defs></defs>
                <polygon class="cls-1"
                    points="105 0 105 150 95 150 95 105 0 105 0 95 95 95 95 55 0 55 0 45 95 45 95 0 105 0" />
            </svg>
            <svg id="logoH" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 150" width="105"
                height="150">
                <defs></defs>
                <title></title>
                <polygon class="cls-1"
                    points="105 0 105 150 95 150 95 105 10 105 10 150 0 150 0 0 10 0 10 95 95 95 95 0 105 0" />
            </svg>
        </div>
        <h2 class="subtitle">
            ERNEST HO
        </h2>
    </section>
</template>
  
<script>
export default {
  name: 'Landing',
  data() {
    return {
      logoE: null,
      logoH: null,
      maxScrollX: null,
    };
  },
  mounted() {
    this.logoE = document.getElementById('logoE');
    this.logoH = document.getElementById('logoH');
    this.maxScrollX = window.innerWidth/2+5;
    console.log(this.maxScrollX)
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.logoE && this.logoH) {
        const scrollX = Math.min(window.scrollY, this.maxScrollX);
        this.logoE.style.transform = `translateX(-${scrollX}px)`;
        this.logoH.style.transform = `translateX(${scrollX}px)`;
      }
    },
  },
};
</script>

  
<style>
.landing {
    min-height: 100vh;
    background-color: var(--nicegray);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 205px;
    height: 150px;
}

#logoE {
    fill: whitesmoke;
    margin-right: -5px;
    overflow: hidden;
}

#logoH {
    fill: whitesmoke;
    margin-left: -5px;
    overflow: hidden;
}

.subtitle {
    font-size: 20px;
    color: whitesmoke;
    font-family: 'Work Sans', sans-serif;
    letter-spacing: 1em;
}

.subtitle::after {
  content: attr(data-last-letter);
  position: absolute;
  right: 0;
  transform: translateX(100%);
  letter-spacing: -1em; /* Counteract the letter spacing */
}
</style>