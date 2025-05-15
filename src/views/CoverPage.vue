<template>
    <div
        class="font-cormorant tracking-[.25em] min-h-screen flex items-center justify-evenly flex-col text-black relative bg-[url('/background-image.png')] bg-cover bg-center bg-no-repeat animate-fade-in"
        style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
    >
        <div class="flex flex-col items-center justify-center">
            <p
                class="animate-ascend"
                style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
            >
                KINDLY JOIN US
            </p>
            <p
                class="animate-ascend"
                style="animation-delay: 0.8s; opacity: 0; animation-fill-mode: forwards"
            >
                FOR THE WEDDING OF
            </p>
            <div class="grid grid-cols-5 mt-5 mb-4 text-2xl">
                <div class="text-center col-span-2">
                    <p>
                        <span
                            v-for="(char, index) in nuget"
                            :key="index"
                            class="animate-fade-in"
                            :style="{ animationDelay: `${0.5 + index * 0.1}s`, animationIterationCount: 'infinite', opacity: 0 }"
                        >
                            {{ char }}
                        </span>
                    </p>
                </div>
                <div class="text-center">
                    <p
                        class="animate-fade-in"
                        style="animation-delay: 0.8s; opacity: 0; animation-fill-mode: forwards"
                    >
                        &
                    </p>
                </div>
                <div class="text-center col-span-2">
                    <p>
                        <span
                            v-for="(char, index) in vivi"
                            :key="index"
                            class="animate-fade-in"
                            :style="{ animationDelay: `${0.5 + index * 0.1}s`, animationIterationCount: 'infinite', opacity: 0 }"
                        >
                            {{ char }}
                        </span>
                    </p>
                </div>
            </div>
            <p
                class="text-xs animate-fade-in"
                style="animation-delay: 0.8s; opacity: 0; animation-fill-mode: forwards"
            >
                JULY 16th 2025
            </p>
        </div>

        <div class="p-6 rounded-xl text-center z-10 text-white">
            <p
                class="text-sm tracking-widest mb-2 animate-fade-in"
                style="animation-delay: 1s; opacity: 0; animation-fill-mode: forwards"
            >
                Kepada Yang Terhormat:
            </p>
            <p
                class="text-lg animate-ascend"
                style="animation-delay: 1.3s; opacity: 0; animation-fill-mode: forwards"
            >
                {{ guestName }}
            </p>
            <p
                class="text-sm tracking-widest animate-fade-in"
                style="animation-delay: 1.5s; opacity: 0; animation-fill-mode: forwards"
            >
                Di Tempat
            </p>
            <button
                @click="openInvitation"
                class="mt-10 tracking-wide bg-[#415e29] text-white px-6 py-2 rounded-full hover:bg-[#517a34] transition transform hover:scale-110 animate-pulse"
            >
                Open Invitation
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const vivi = "Yaumil";
const nuget = "Iqram";
// Extract the name from the URL path
const guestName = decodeURIComponent(route.params.name || "Tanpa Nama");

function openInvitation() {
    router.push({ name: "Home", params: { name: route.params.name } });
}
</script>
