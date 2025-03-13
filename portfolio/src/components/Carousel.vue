<template>
    <!-- Viewport -->
    <div
        class="carousel-wrapper"
        :style="`${shadowPadding}`"
        @click="$emit('click')"
    >
        <!-- Content -->
        <div
            class="carousel"
            :style="`
            transform: translate${horizontal ? 'X' : 'Y'}(${
                offset * (this.invertDirection ? -1.0 : 1.0)
            }px);
            gap:${gap}px;
            flex-direction:${flexDirection};`"
        >
            <!-- Item -->
            <img
                v-for="(image, index) in images"
                :key="index"
                class="image"
                :src="image"
                ref="images"
                :style="`${horizontal ? 'height:100%;' : 'width:100%;'}`"
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
            horizontal: {
                type: Boolean,
                default: false,
            },
            invertDirection: {
                type: Boolean,
                default: false,
            },
        },
        mounted: function () {
            this.update();
        },
        beforeDestroy() {
            cancelAnimationFrame(this.updateId);
        },
        methods: {
            update() {
                if (this.$refs.images !== undefined) {
                    this.offset += this.speed;

                    let lastImage = this.$refs.images.at(-1);
                    let itemOffset = this.horizontal
                        ? lastImage.offsetWidth
                        : lastImage.offsetHeight;
                    if (this.offset > itemOffset + this.gap) {
                        this.offset = 0;
                        this.images.unshift(this.images.pop());
                    }
                }

                this.updateId = requestAnimationFrame(this.update);
            },
        },
        computed: {
            flexDirection() {
                // Handle direction
                let flexDirection = this.horizontal ? "row" : "column";
                if (this.invertDirection) flexDirection += "-reverse";
                return flexDirection;
            },
            shadowPadding() {
                // Handle padding for shadow
                return this.horizontal
                    ? `padding-top: 50px;
                        padding-bottom: 50px;`
                    : `padding-left: 50px;
                        padding-right: 50px;`;
            },
        },
    };
</script>

<style scoped>
    .carousel-wrapper {
        overflow: hidden;
    }

    .carousel {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .image {
        border-radius: 15px;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    }
</style>
