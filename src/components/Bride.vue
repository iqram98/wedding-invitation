<template>
    <div
        ref="bride"
        class="font-cormorant tracking-widest flex flex-col items-center justify-center text-center z-10"
    >
        <p
            class="mb-2"
            :class="{ 'animate-ascend': isVisible }"
            style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards"
        >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
        </p>
        <p
            class="text-sm px-5"
            :class="{ 'animate-fade-in': isVisible }"
            style="animation-delay: 0.7s; opacity: 0; animation-fill-mode: forwards"
        >
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan Kami :
        </p>
        <div class="flex items-center justify-evenly text-center mt-10 mb-10 w-full">
            <img
                src="/me.png"
                alt="Dummy Image"
                class="max-h-60 w-[40vw] rounded-tl-[30%] object-cover object-top-left border-2 border-secondary-color p-1"
                :class="{ 'animate-fade-in': isVisible }"
                style="animation-delay: 1.5s; opacity: 0; animation-fill-mode: forwards"
                @click="changeImage($event.target)"

            />
            <img
                src="/you.png"
                alt="Dummy Image"
                class="max-h-60 w-[40vw] rounded-tr-[30%] object-cover object-top-left border-2 border-secondary-color p-1"
                :class="{ 'animate-fade-in': isVisible }"
                style="animation-delay: 1.5s; opacity: 0; animation-fill-mode: forwards"
                @click="changeImage($event.target)"
            />
        </div>
        <div class="px-5">
            <h3
                class="text-lg"
                :class="{ 'animate-ascend': isVisible }"
                style="animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards"
            >
                Iqram Nugraha, S.Pd., M.Pd.
            </h3>
            <p
                class="text-xs"
                :class="{ 'animate-fade-in': isVisible }"
                style="animation-delay: 1.1s; opacity: 0; animation-fill-mode: forwards"
            >
                Anak Pertama dari Bapak H. Baso Amang, S.Pd & Ibu Hj. Hermawati, S.Pd
            </p>
        </div>
        <p class="mt-3 mb-3" :class="{ 'animate-fade-in': isVisible }"
        style="animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards">&</p>
        <div class="px-12">
            <h3
                class="text-lg"
                :class="{ 'animate-ascend': isVisible }"
                style="animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards"
            >
                Yaumil Jum'ati Aviani, S.Pd
            </h3>
            <p
                class="text-xs"
                :class="{ 'animate-fade-in': isVisible }"
                style="animation-delay: 1.1s; opacity: 0; animation-fill-mode: forwards"
            >
                Anak Kedua dari Bapak Ir. Jahruddin & Ibu Juhri, S.Ag
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

        observer.observe(this.$refs.bride);
    },
    methods: {
        changeImage(target) {
            const image = target.tagName === 'IMG' ? target : target.querySelector('img');
            if (image.src.includes('/you.png')) {
                image.src = image.src.replace('/you.png', '/yuu.png');
            } else {
                image.src = image.src.replace('/yuu.png', '/you.png');
                
            }

            if (image.src.includes('/me.png')) {
                image.src = image.src.replace('/me.png', '/meee.png');
            } else {
                image.src = image.src.replace('/meee.png', '/me.png');
                
            }
        },
    },
};
</script>
