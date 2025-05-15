<template>
    <div
        ref="gallery"
        class="font-cormorant tracking-widest flex flex-col items-center justify-center text-center w-[75vw] z-2"
    >
        <h3
            class="text-xl font-semibold text-center mb-4"
            :class="{ 'animate-ascend': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            Our Moments
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
                v-for="i in 6"
                :key="i"
                :src="`/gallery${i}.png`"
                alt=""
                class="rounded-lg"
                :class="{ 'animate-fade-in': isVisible }"
                style="opacity: 0; animation-fill-mode: forwards"
                :style="{ animationDelay: `${0.5 + (i - 1) * 0.2}s` }"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.isVisible = true;
                    observer.disconnect(); // Stop observing once the animation starts
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        observer.observe(this.$refs.gallery);
    },
};
</script>
