<template>
    <div class="timeline">
        <div
            v-for="(event, index) in events"
            :key="index"
            class="timeline-event"
        >
            <!--Dot and line-->
            <div class="timeline-step">
                <div class="timeline-dot" :style="dotStyle"></div>
                <div class="timeline-line" :style="lineStyle(index)"></div>
            </div>
            <!--Content-->
            <div class="timeline-event-content">
                <slot
                    name="timeline-event-content"
                    v-bind:event="event"
                    v-bind:index="index"
                    v-bind:isLast="index == events.length - 1"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    props: {
        events: {
            type: Array,
            required: true,
        },
        dotSize: {
            type: String,
        },
    },
    methods: {
        lineStyle(index) {
            return `height: ${
                this.events[index] ? this.events[index].eventHeight : 0
            }px;`;
        },
    },
    computed: {
        dotStyle() {
            return `width: ${this.dotSize}; height: ${this.dotSize}`;
        },
    },
};
</script>

<style scoped>
.timeline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.timeline-step {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timeline-event {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.timeline-event-content {
    margin-left: 10px;
    transform: translateY(-50%);
}

.timeline-dot {
    background-color: white;
    border-radius: 100%;
}

.timeline-line {
    border-left: 3px solid white;
}
</style>
