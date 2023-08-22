<template>
  <h1>Experiences</h1>
  <section class="experiences">
    <Timeline :events="events" />
  </section>
</template>
  
<script>
import Timeline from '@/components/Timeline.vue';
export default {
  components: {
    Timeline
  },
  name: 'Experiences',
  data(){
    return{
      events:[
      {
        header: "Graduted Richmond Hill Highschool",
        body: "After 4 awkward year I left this place",
        startDate: "2015-09-08",
        endDate: "2019-06-26",
      },
      {
        header: "Start School at University of Waterloo",
        body: "With nothing to my name I went to Waterloo",
        startDate: "2019-09-4",
        endDate: "2019-09-4",
      },
      {
        header: "First Coop @ Genesys",
        body: "First intoduction into DevOps",
        startDate: "2020-01-06",
        endDate: "2020-04-24",
      },
      {
        header: "Second Coop @ Genesys",
        body: "Wanted to try webdev, it was too hard",
        startDate: "2020-09-08",
        endDate: "2020-11-23",
      },
      {
        header: "Third Coop @ Athos",
        body: "Cloud Computing was my calling",
        startDate: "2021-05-03",
        endDate: "2021-08-20",
      },
      {
        header: "Fourth, Fifth and Sixth Coop @ Riskfuel",
        body: "A little bit of hardware, devops and dev.",
        startDate: "2022-01-04",
        endDate: "2023-11-22",
      },
      ]
    }
  }
};
</script>
  
<style scoped>
.experiences {
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* Add other styling as needed */
}

@media screen and (max-width: 768px) {
    .card-container {
        flex-direction: column;
    }
}

</style>