<template>
    <h2 class="typing-title">
        {{ currentTitle }}<span class="cursor" :class="{ 'blink': showCursor }">&#9612;</span>
    </h2>
</template>
  
<script>
export default {
    props: {
        titles: Array,
    },
    data() {
        return {
            currentTitle: '',
            currentIndex: 0,
            typingDelay: 100,
            erasingDelay: 50,
            pauseDelay: 5000,
            showCursor: true,
            cursorBlinkInterval: 500,
        };
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        async startTyping() {
            while (true) {
                // Type
                await this.typeTitle(this.titles[this.currentIndex].title);
                await this.pause(this.pauseDelay);

                // Erase
                await this.eraseTitle();
                //await this.pause(this.pauseDelay);

                // Randomly select next title
                this.currentIndex = this.randomIndexWithProbabilities(this.titles);
            }
        },
        typeTitle(title) {
            return new Promise((resolve) => {
                let index = 0;
                const typeInterval = setInterval(() => {
                    this.currentTitle = title.slice(0, index);
                    index++;
                    if (index > title.length) {
                        clearInterval(typeInterval);
                        resolve();
                    }
                }, this.typingDelay);
            });
        },
        eraseTitle() {
            return new Promise((resolve) => {
                let index = this.currentTitle.length;
                const eraseInterval = setInterval(() => {
                    this.currentTitle = this.currentTitle.slice(0, index);
                    index--;
                    if (index < 0) {
                        clearInterval(eraseInterval);
                        resolve();
                    }
                }, this.erasingDelay);
            });
        },
        pause(duration) {
            return new Promise((resolve) => {
                setTimeout(resolve, duration);
            });
        },
        randomIndexWithProbabilities(array) {
            const totalProbability = array.reduce((sum, item) => sum + item.probability, 0);
            let random = Math.random() * totalProbability;
            for (let i = 0; i < array.length; i++) {
                if (random < array[i].probability) {
                    return i;
                }
                random -= array[i].probability;
            }
            return array.length - 1;
        },
    },
};
</script>
  
<style scoped>
.typing-title {
    white-space: nowrap;
    overflow: hidden;
}

.cursor {
    color: transparent;
    vertical-align: middle;
    transition: color 0.5s;
    /* Add a smooth transition for the color change */
}

.blink {
    animation: blink-animation 1s step-end infinite;
}

@keyframes blink-animation {
    0%, 100% {
        color: transparent;
    }

    50% {
        color: black;
        /* Change this to your desired color */
    }
}

@media screen and (max-width: 768px) {
    .typing-title {
        white-space: normal;
    }
}
</style>






  