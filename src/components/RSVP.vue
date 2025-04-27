<template>
    <div class="bg-secondary-color h-[90%] w-[90%] rounded-[5%] font-cormorant tracking-widest flex flex-col items-center justify-center text-center">
        <h3 class="font-luxurious text-4xl font-semibold text-center mb-4 z-10">Wedding Wish</h3>
        <form
            @submit.prevent="submitForm"
            class="w-[95%]"
        >
            <div>
                <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full h-8 border border-gray-300 rounded p-2 mb-2 text-xs"
                    placeholder="Your Name..."
                />
            </div>
            <div>
                <textarea
                    v-model="form.message"
                    class="w-full border border-gray-300 rounded p-2 text-xs"
                    rows="3"
                    placeholder="Your message..."
                ></textarea>
            </div>
            <div>
                <select
                    v-model="form.attendance"
                    required
                    class="w-full h-8 border border-gray-300 rounded p-2 mb-2 text-xs"
                >
                    <option
                        disabled
                        value=""
                    >
                        Confirm your attendance
                    </option>
                    <option value="true">Yes, I will attend</option>
                    <option value="false">No, I can't attend</option>
                </select>
            </div>

            <button
                type="submit"
                class="tracking-wide bg-[#415e29] text-white px-6 py-2 rounded-full hover:bg-[#517a34] transition transform hover:scale-110 float-right"
            >
                Send
            </button>
        </form>
        <div class="mt-4 w-full px-2 h-[40%] overflow-auto z-100">
            <div v-for="item in response" class="text-sm mb-2 flex flex-col items-start border-y border-gray-300 px-5 py-4" :key="item.id">
                <h3 class="font-bold font-xs">{{ item.name }}</h3>
                <p class="font-xs">{{ item.message }}</p>
                <p class="text-[.7rem] text-gray-600"><span class="material-icons" style="font-size: .5rem;">schedule</span> {{ formatDate(item.created_at) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Reactive state for form data and the submitted flag
const form = ref({
    name: "",
    attendance: "",
    message: "",
});

const response = ref([]);
const submitted = ref(false);

// Submit the form to Supabase
const submitForm = async () => {
    try {
        await axios.post(
            `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/rsvp`,
            {
                name: form.value.name,
                attendance: form.value.attendance === "true",
                message: form.value.message,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                    Prefer: "return=representation",
                },
            }
        );
        submitted.value = true;
        form.value = { name: "", attendance: "", message: "" }; // reset form
        await fetchRSVP(); // Refetch RSVP data after submitting
    } catch (error) {
        console.error("Failed to submit RSVP:", error);
    }
};

// Fetch all RSVP messages
const fetchRSVP = async () => {
    try {
        const result = await axios.get(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/rsvp`, {
            headers: {
                "Content-Type": "application/json",
                apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
        });
        if (result.data) {
            response.value =  result.data.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
        }
    } catch (error) {
        console.error("Failed to fetch RSVP:", error);
    }
};

const formatDate = (createdAt) => {
    const currentDate = new Date();
    const date = new Date(createdAt);

    const timeDifference = currentDate - date; // Difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000); // Convert to seconds
    const minutes = Math.floor(seconds / 60); // Convert to minutes
    const hours = Math.floor(minutes / 60); // Convert to hours
    const days = Math.floor(hours / 24); // Convert to days

    if (days >= 1) {
        return days === 1 ? `${days} day ago ${formatTime(date)}` : `${days} days ago ${formatTime(date)}`;
    } else {
        return `today ${formatTime(date)}`;
    }
};

// Helper function to format time in "HH:MM am/pm" format
const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

// Fetch the RSVP data when the component is mounted
onMounted(() => {
    fetchRSVP();
});
</script>
