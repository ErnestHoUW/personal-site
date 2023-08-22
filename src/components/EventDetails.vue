<template>
      <div class="event-details-box">
        <h3>{{ event.header }}</h3>
        <p>{{ formatDate(event.startDate) }} - {{ formatDate(event.endDate) }}</p>
        <p>{{ event.body }}</p>
        <button @click="closeDetails">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      event: Object,
    },
    methods: {
      formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      closeDetails() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .event-details-box {
    background-color: white;
    margin: 20px;
    padding: 20px;
    width: 40%;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: left;
  }
  </style>
  