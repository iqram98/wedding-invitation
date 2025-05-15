<template>
    <div ref="thanks" class="font-cormorant flex flex-col items-center justify-center">
        <div class="tracking-[.25em] text-center px-5">
            <h1
                class="text-2xl font-bold mb-4"
                :class="{ 'animate-ascend': isVisible }"
                style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
            >
                Thank You!
            </h1>
            <p class="text-sm mb-4">We are grateful for your presence and support on our special day. Your love and blessings mean the world to us. We look forward to celebrating together and creating beautiful memories. Thank you for being a part of our journey. With love,</p>
            <strong>Iqram & Yaumil</strong>
        </div>
        <div
            class="text-xs text-center mt-8"
            :class="{ 'animate-fade-in': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            <p>
                Create by:
                <a
                    href="https://www.instagram.com/iqram_nugraha?igsh=aHIydHlyejQyaWdw"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@iqram_nugraha</a
                >
            </p>
            <p>
                Design by:
                <a
                    href="https://www.instagram.com/ymiljv?igsh=MTFiMnduZ2I4bGtpZw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    >@ymiljv</a
                >
            </p>
            <p>Song's title: Kamu Yang Kutunggu - Rossa feat. Afgan</p>
            <p class="mt-4">&copy Copyright Iqram <span class="text-[.4rem]">🩵</span> Yaumil 2025</p>
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

        observer.observe(this.$refs.thanks);
    },
};
</script>
