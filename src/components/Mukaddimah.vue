<template>
    <div
        ref="mukaddimah"
        class="bg-secondary-color h-[60%] w-[90%] rounded-t-[30%] font-cormorant tracking-widest flex flex-col items-center justify-center text-center px-10"
    >
        <h3
            class="font-luxurious text-4xl font-semibold text-center mb-15 z-10"
            :class="{ 'animate-ascend': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            - Q.S. Ar-Rum: 21 -
        </h3>
        <p
            class="z-10"
            :class="{ 'animate-fade-in': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir."
        </p>
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

        observer.observe(this.$refs.mukaddimah);
    },
};
</script>
