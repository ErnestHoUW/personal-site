<template>
    <div>
      <div v-for="(event, index) in sortedEvents" :key="index" class="event-dot" @click="showEventDetail(event)">
        <div class="dot"></div>
        <div v-if="selectedEvent === event" class="event-detail">
          <h3>{{ event.header }}</h3>
          <p>{{ formatDate(event.startDate) }} - {{ formatDate(event.endDate) }}</p>
          <p>{{ event.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      events: Array,
    },
    data() {
      return {
        selectedEvent: null,
      };
    },
    computed: {
      sortedEvents() {
        return this.events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      },
    },
    methods: {
      showEventDetail(event) {
        this.selectedEvent = this.selectedEvent === event ? null : event;
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
  };
  </script>
  
  <style scoped>
  .event-dot {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin: 0 10px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }
  
  .event-detail {
    position: absolute;
    top: -80px;
    left: -50px;
    width: 200px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>
  