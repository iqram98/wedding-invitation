<template>
    <h3 class="text-xl font-semibold text-center mb-4">Our Moments</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img
            v-for="i in 6"
            :key="i"
            :src="`/gallery${i}.jpg`"
            alt=""
            class="rounded-lg"
        />
    </div>
</template>
