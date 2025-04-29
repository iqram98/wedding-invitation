<template>
    <div class="snap-y snap-mandatory w-screen overflow-x-hidden h-screen overflow-y-scroll scroll-smooth">
        <nav class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-100 w-3/5">
            <ul class="flex justify-around bg-lime-800 text-secondary-color p-1 rounded-full shadow-lg">
                <li>
                    <a
                        href="#section1"
                        class="flex items-center justify-center w-8 h-8"
                    >
                        <span class="material-icons text-sm">home</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#section2"
                        class="flex items-center justify-center w-8 h-8"
                    >
                        <span class="material-icons text-sm">description</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#section3"
                        class="flex items-center justify-center w-8 h-8"
                    >
                        <span class="material-icons text-sm">wc</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#section4"
                        class="flex items-center justify-center w-8 h-8"
                    >
                        <span class="material-icons text-sm">calendar_month</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#section5"
                        class="flex items-center justify-center w-8 h-8"
                    >
                        <span class="material-icons text-sm">mail</span>
                    </a>
                </li>
            </ul>
        </nav>
        <audio
            autoplay
            loop
            src="/bgmusic.mp3"
        ></audio>
        <div
            class="fixed bottom-20 right-5 z-100 w-8 h-8 text-tertiary-color border-tertiary-color border-1 rounded-full p-2 flex items-center justify-center cursor-pointer animate-spin-slow"
            @click="tooglePlayMusic"
        >
            <span class="material-icons text-sm" v-if="playMusic">volume_up</span>
            <span class="material-icons text-sm" v-else>volume_mute</span>
        </div>
        <!-- Section 1 -->
        <section
            id="section1"
            class="snap-start relative text-center py-10 bg-secondary-color shadow-sm min-h-screen flex items-center justify-center flex-col"
        >
            <div class="mask-b-from-30% mask-b-to-70% bg-[url('/backgorund-image.png')] bg-linear-to-b bg-cover bg-center bg-no-repeat animate-fade-in w-screen h-screen absolute"></div>
            <img
                src="/flower1.png"
                alt="Flower"
                class="absolute -top-4 -right-20 w-60 h-60"
            />
            <img
                src="/flower1.png"
                alt="Flower"
                class="absolute -top-4 -left-20 w-60 h-60 transform -scale-x-100"
            />
            <CountDown :countdown="countdown" />
        </section>

        <!-- Section 2 -->
        <section
            id="section2"
            class="relative snap-start flex items-center justify-center h-screen bg-background-color text-primary-color"
        >
            <img
                src="/flower3.png"
                alt="Flower"
                class="absolute -top-20 -right-60 w-140 max-w-none opacity-50"
            />
            <img
                src="/flower2.png"
                alt="Flower"
                class="absolute bottom-0 -left-10 w-50 opacity-50"
            />
            <Mukaddimah />
        </section>

        <!-- Section 3 -->
        <section
            id="section3"
            class="relative snap-start flex items-center justify-center h-screen bg-background-color text-primary-color pb-10"
        >
            <Bride />
            <img
                src="/flower1.png"
                alt="Flower"
                class="absolute -top-8 -right-30 w-80 max-w-none opacity-50"
            />
            <img
                src="/flower2.png"
                alt="Flower"
                class="absolute bottom-0 -left-10 w-50 opacity-50"
            />
        </section>

        <!-- Section 4 -->
        <section
            id="section4"
            class="relative snap-start flex items-center justify-center h-screen bg-background-color text-primary-color pb-10"
        >
            <Date />
            <img
                src="/flower1.png"
                alt="Flower"
                class="absolute -top-8 -right-30 w-80 max-w-none opacity-50"
            />
            <img
                src="/flower2.png"
                alt="Flower"
                class="absolute bottom-0 -left-10 w-50 opacity-50"
            />
        </section>
        <section
            id="section5"
            class="relative snap-start flex items-center justify-center h-screen bg-background-color text-primary-color pb-10"
        >
            <RSVP />
            <img
                src="/flower1.png"
                alt="Flower"
                class="absolute -top-8 -right-30 w-80 max-w-none opacity-50"
            />
            <img
                src="/flower2.png"
                alt="Flower"
                class="absolute bottom-0 -left-10 w-50 opacity-50"
            />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CountDown from "../components/Countdown.vue";
import Gallery from "../components/Gallery.vue";
import RSVP from "../components/RSVP.vue";
import Schedule from "../components/Schedule.vue";
import Mukaddimah from "../components/Mukaddimah.vue";
import Bride from "../components/Bride.vue";
import Date from "../components/Date.vue";

let playMusic = ref(true);

const countdown = ref({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
});

function tooglePlayMusic() {
    const audio = document.querySelector("audio");
    if (!playMusic.value) {
        audio.play();
        playMusic.value = true;
    } else {
        audio.pause();
        playMusic.value = false;
    }
}

function updateCountdown() {
    const eventDate = new window.Date("2025-06-16T10:00:00");
    const now = new window.Date();
    const diff = eventDate - now;

    if (diff <= 0) return;

    countdown.value = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

onMounted(() => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
</script>

<style scoped>
audio {
    display: none;
}
</style>
