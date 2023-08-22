<template>
    <div class="eventviewer">
        <div class="timeline">
            <div v-for="year in years" :key="year" class="year-label">{{ year }}</div>
            <div class="timeline-line"></div>
            <div v-for="(event, index) in sortedEvents" :key="index"
                :class="['event-dot', { 'selected-dot': event === selectedEvent }]"
                :style="{ top: calculatePosition(event.startDate) }" @click="showEventDetails(index)">
            </div>
        </div>
        <EventDetails v-if="selectedEvent" :event="selectedEvent" @close="selectedEvent = null" />
    </div>
</template>
  
<script>
import EventDetails from "@/components/EventDetails.vue";

export default {
    props: {
        events: Array,
    },
    components: {
        EventDetails
    },
    data() {
        return {
            sortedEvents: [],
            selectedEvent: null,
            years: [],
        };
    },
    mounted() {
        this.sortEvents();
        this.generateYearLabels();
    },
    methods: {
        sortEvents() {
            this.sortedEvents = [...this.events].sort(
                (a, b) => new Date(b.startDate) - new Date(a.startDate)
            )
            this.selectedEvent = this.sortedEvents[0]
            console.log(this.selectedEvent)
        },
        calculatePosition(startDate) {
            const startTimestamp = new Date(startDate).getTime();
            const firstEventTimestamp = new Date(this.sortedEvents[0].startDate).getTime();
            const lastEventTimestamp = new Date(this.sortedEvents[this.sortedEvents.length - 1].startDate).getTime();
            const totalDuration = lastEventTimestamp - firstEventTimestamp;
            const relativePosition = (startTimestamp - firstEventTimestamp) / totalDuration;
            return `calc(${relativePosition * 100}% - 10px)`; // Adjust 5px for dot alignment
        },
        showEventDetails(index) {
            this.selectedEvent = this.sortedEvents[index];
        },
        generateYearLabels() {
            const startYear = this.events[0].start.getFullYear();
            const endYear = this.events[this.events.length - 1].end.getFullYear();
            for (let year = startYear; year <= endYear; year++) {
                this.years.push(year);
            }
        }
    },
};
</script>
  
<style scoped>
.eventviewer {
    display: flex;
    height: 80%;
}

.timeline {
    position: relative;
    width: 20px;
    height: 100%;
    padding: 0 20px;
}

.timeline-line {
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: var(--nicegray);
    transform: translateX(50%);
}

.event-dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--nicegray);
    cursor: pointer;
    transition: background-color 0.1s linear; /* Add transition */
}

.event-dot.selected-dot {
    width: 26px;
    height: 26px;
    transform: translateX(-3px);
}

.year-label {
    position: absolute;
    bottom: -20px;
    /* Adjust the value for vertical positioning */
    left: 0;
    transform: translateX(-50%);
    font-size: 14px;
    color: #000000;
}

/* ... other styles ... */
</style>
  