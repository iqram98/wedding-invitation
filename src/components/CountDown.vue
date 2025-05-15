<template>
    <div class="font-cormorant tracking-[.25em] relative mt-50">
        <h5 class="text-sm animate-fade-in" style="animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards;">The Wedding of</h5>
        <div class="grid grid-cols-5 mt-5 mb-4 text-2xl animate-fade-in" style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards">
            <div class="text-center col-span-2">
                <p>Iqram</p>
            </div>
            <div class="text-center">
                <p>&</p>
            </div>
            <div class="text-center col-span-2">
                <p>Yaumil</p>
            </div>
        </div>
        <h3 class="text-3xl mt-20 font-semibold mb-4 animate-ascend" style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards">16 - 06 - 2025</h3>
        <div class="flex justify-center gap-6 text-2xl font-bold">
            <div class="animate-ascend" style="animation-delay: 0.7s; opacity: 0; animation-fill-mode: forwards">
                <span>{{ countdown.days }}</span>
                <div class="text-sm">Days</div>
            </div>
            <div class="animate-ascend" style="animation-delay: 0.9s; opacity: 0; animation-fill-mode: forwards">
                <span>{{ countdown.hours }}</span>
                <div class="text-sm">Hours</div>
            </div>
            <div class="animate-ascend" style="animation-delay: 1.1s; opacity: 0; animation-fill-mode: forwards">
                <span>{{ countdown.minutes }}</span>
                <div class="text-sm">Minutes</div>
            </div>
            <div class="animate-ascend" style="animation-delay: 1.3s; opacity: 0; animation-fill-mode: forwards">
                <span>{{ countdown.seconds }}</span>
                <div class="text-sm">Seconds</div>
            </div>
        </div>

        <button
            @click="saveDate"
            class="mt-10 tracking-wide bg-[#415e29] text-white px-6 py-2 rounded-full hover:bg-[#517a34] transition transform hover:scale-110 animate-bounce"
        >
            Save the Date
        </button>
    </div>
</template>

<script>
export default {
    props: {
        countdown: {
            type: Object,
            required: true,
            default: () => ({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }),
        },
    },
    methods: {
        saveDate() {
            const event = {
                title: "The Wedding of VIVI & NUGET",
                start: new Date(2025, 6, 16), // Month is 0-indexed, so 6 represents July
                end: new Date(2025, 6, 16),
                description: "Join us to celebrate the wedding of VIVI & NUGET!",
            };

            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.toISOString().replace(/-|:|\.\d+/g, "")}/${event.end.toISOString().replace(/-|:|\.\d+/g, "")}&details=${encodeURIComponent(event.description)}`;

            window.open(calendarUrl, "_blank");
        },
    },
};
</script>
