<template>
  <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
    <div class="card-inner">
      <div class="card-front">
        <img :src="image" alt="Card Image" class="card-image" />
      </div>
      <div class="card-back">
        <div class="card-content">
          <h3 class="card-header">{{ header }}</h3>
          <p class="card-body">{{ body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    image: String,
    header: String,
    body: String,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>
  
<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  /* Adjust the height as needed */
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.5s;
  
}

.card:hover {
  transform: scale(1.05);
  -webkit-mask:linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;
  animation: shimmer 0.8s;
  animation-fill-mode: both;
}

@keyframes shimmer {
  100% {-webkit-mask-position:left}
}

.card-inner {
  width: 100%;
  height: 100%;
  display: flex;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  background-color: var(--nicegray);
}

.card.flipped .card-inner{
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.card-front {
  transform: rotateY(0deg);
  padding: 0;
}

.card-back {
  transform: rotateY(180deg);
  padding: 0px;
}

.card-image {
  width: 200px;
}

.card-content {
  text-align: center;
  padding: 10px;
}

.card-header {
  font-size: 1.2em;
  margin: 10px 0;
}

.card-body {
  font-size: 0.9em;
  color: #555;
}
</style>
  