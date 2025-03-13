<template>
    <div class="background">
        <div
            class="carousel"
            :style="`
                transform: translateY(${offset}px);
                gap:${gap}px`"
        >
            <img
                v-for="(image, index) in images"
                :key="index"
                class="image"
                :src="image"
                ref="images"
            />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                offset: 0,
                projects: null,
                updateId: null,
            };
        },
        props: {
            images: {
                type: Array,
                required: true,
            },
            speed: {
                type: Number,
                default: 0.3,
            },
            gap: {
                type: Number,
                default: 50,
            },
        },
        mounted: function () {
            console.log("mounted is called!");
            this.$nextTick(this.update());
        },
        beforeDestroy() {
            cancelAnimationFrame(this.updateId);
        },
        methods: {
            update() {
                if (this.$refs.images !== undefined) {
                    this.offset += this.speed;

                    if (
                        this.offset >
                        this.$refs.images.at(-1).offsetHeight + this.gap
                    ) {
                        this.offset = 0;
                        this.images.unshift(this.images.pop());
                    }
                }

                this.updateId = requestAnimationFrame(this.update);
            },
        },
    };
</script>

<style scoped>
    .background {
        overflow: hidden;
        padding-left: 50px;
        padding-right: 50px;
    }

    .carousel {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .image {
        width: 100%;
        border-radius: 15px;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    }
</style>
