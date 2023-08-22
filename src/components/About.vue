<template>
    <section class="about">
        <div class="about-title">
            <TypingTitle :titles="sectionTitles" />
        </div>
        <div class="card-container">
            <Card v-for="(card, index) in cards" :key="index" :image="card.image" :header="card.header" :body="card.body" />
        </div>
        <div class="spotify-player">
            Hi there
        </div>
    </section>
</template>
  
<script>
import Card from '@/components/Card.vue';
import TypingTitle from '@/components/TypingTitle.vue';

export default {
    name: 'About',
    components: {
        Card,
        TypingTitle,
    },
    data() {
        return {
            cards: [
                {
                    image: require('@/assets/DevOps.svg'),
                    header: 'Devops Engineer',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    image: require('@/assets/graduation-cap.svg'),
                    header: 'Card 2 Header',
                    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    image: require('@/assets/piano-keys.svg'),
                    header: 'Card 3 Header',
                    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                },
            ],
            sectionTitles: [
                { title: 'About Me', probability: 0 },
                { title: 'DevOps Developer', probability: 0.5 },
                { title: 'Computer Engineer', probability: 0.3 },
                { title: 'Lauver', probability: 0.2 },
                { title: 'Ping Pong <3', probability: 0.2 },
            ],
        };
    },
};
</script>
  
<style scoped>
.about {
    padding: 40px 0;
    text-align: center;
    background-color: #f1beb0;
    height: 70vh;
    display: flex;
    flex-direction: column;
}

.about-title {
    font-size: 1.8em;
    margin-bottom: 30px;
    font-family: 'Inconsolata';
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.spotify-player {
    width: 50vw;
}

@media screen and (max-width: 768px) {
    .card-container {
        flex-direction: column;
    }
}
</style>
  