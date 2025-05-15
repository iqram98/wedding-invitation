<template>
    <div
        ref="date"
        class="font-cormorant tracking-widest flex flex-col items-center justify-center text-center z-10 px-5"
    >
        <p
            class="text-sm"
            :class="{ 'animate-fade-in': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            Dengan segala kerendahan hati kami mengharapkan kehadiran Bapak/Ibu/Saudara dalam acara pernikahan kami yang akan diselenggarakan pada:
        </p>
        <div
            class="my-4 w-3/4"
            :class="{ 'animate-ascend': isVisible }"
            style="animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards"
        >
            <h3 class="font-luxurious text-3xl">Akad Nikah & Resepsi</h3>
            <div class="grid grid-cols-3 items-center justify-items-center mt-2">
                <p>SENIN</p>
                <p class="border-l-2 border-r-2 px-2 mx-2 text-4xl">16</p>
                <p>JUNI</p>
            </div>
            <p class="mb-2">2025</p>
            <p class="text-xs">Pukul <span class="font-fira">10.00</span> WITA</p>
            <p class="text-xs">Perumnas Bentenge Blok B No. 78</p>
            <p class="text-xs">Kec. Mandai, Kab. Maros</p>
            <p class="text-xs">
                <a
                    href="https://maps.app.goo.gl/wiL1JjdVMsEZ6Eok6"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-tertiary-color underline"
                >
                    Lihat di Google Maps
                </a>
            </p>
        </div>
        <div
            class="my-4 w-3/4"
            :class="{ 'animate-ascend': isVisible }"
            style="animation-delay: 1.3s; opacity: 0; animation-fill-mode: forwards"
        >
            <h3 class="font-luxurious text-3xl">Resepsi</h3>
            <div class="grid grid-cols-3 items-center justify-items-center mt-2">
                <p>SELASA</p>
                <p class="border-l-2 border-r-2 px-2 mx-2 text-4xl">17</p>
                <p>JUNI</p>
            </div>
            <p class="mb-2">2025</p>
            <p class="text-xs">Pukul <span class="font-fira">10.00</span> WITA</p>
            <p class="text-xs">Masjid Al-Markaz Al-Islami Maros</p>
            <p class="text-xs">Jl. Poros Makassar-Maros (Depan Kantor Bupati Maros)</p>
            <p class="text-xs">
                <a
                    href="https://maps.app.goo.gl/PEWvsv8pGZdyD61f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-tertiary-color underline"
                >
                    Lihat di Google Maps
                </a>
            </p>
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

        observer.observe(this.$refs.date);
    },
};
</script>
