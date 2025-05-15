<template>
    <div class="font-cormorant tracking-widest flex flex-col items-center justify-center text-center w-[75vw] z-2">
        <h3 class="text-xl font-semibold text-center mb-4">Our Moments</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
                v-for="i in 6"
                :key="i"
                :src="`/gallery${i}.png`"
                alt=""
                class="rounded-lg"
            />
        </div>
    </div>
</template>
