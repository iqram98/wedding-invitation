<template>
    <div class="h-screen w-screen px-10">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="text-xl font-bold mb-4">Share To Social Media</h1>
            <input type="text" v-model="nameToInvite" class="p-2 border rounded mb-4" placeholder="Type name..." />
            <div class="flex space-x-4" v-if="nameToInvite.length > 2">
                <button @click="shareOnFacebook" class="bg-blue-600 text-white px-4 py-2 rounded">Share on Facebook</button>
                <button @click="shareOnWhatsApp" class="bg-green-500 text-white px-4 py-2 rounded">Share on WhatsApp</button>
                <button @click="shareOnInstagram" class="bg-pink-500 text-white px-4 py-2 rounded">Share on Instagram</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const currentUrl = window.location.origin;
    const nameToInvite = ref('');

    function shareOnFacebook() {
        const encodedName = nameToInvite.value.replace(/ /g, '%20');
        const message = `Assalamu'alaikum ${nameToInvite.value}!\nDengan penuh kebahagiaan, kami mengundang saudara/ saudari untuk menghadiri pernikahan kami:\n\n🤵 Iqram & Yaumil 👰\n\n📨 Undangan lengkap dan detail acara bisa kamu lihat di sini:\nhttps://wedding-invitation-livid-rho.vercel.app/${encodedName}\n\nMerupakan kehormatan dan kebahagiaan bagi kami apabila saudara/ saudari ${nameToInvite.value} berkenan hadir dan memberikan doa restu.\nTerima kasih, dan sampai jumpa di hari bahagia kami! 🤍`
        const shareUrl = `https://wedding-invitation-livid-rho.vercel.app/${encodeURIComponent(nameToInvite.value)}`;
        const facebookMessengerUrl = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=YOUR_FACEBOOK_APP_ID&redirect_uri=${encodeURIComponent(shareUrl)}`;
        window.open(facebookMessengerUrl, '_blank');
    }
    function shareOnWhatsApp() {
        const encodedName = nameToInvite.value.replace(/ /g, '%20');
        const message = `Assalamu'alaikum ${nameToInvite.value}!\nDengan penuh kebahagiaan, kami mengundang saudara/ saudari untuk menghadiri pernikahan kami:\n\n🤵 Iqram & Yaumil 👰\n\n📨 Undangan lengkap dan detail acara bisa kamu lihat di sini:\nhttps://wedding-invitation-livid-rho.vercel.app/${encodedName}\n\nMerupakan kehormatan dan kebahagiaan bagi kami apabila saudara/ saudari ${nameToInvite.value} berkenan hadir dan memberikan doa restu.\nTerima kasih, dan sampai jumpa di hari bahagia kami! 🤍`
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappShareUrl, '_blank');
    }
    function shareOnInstagram() {
        const encodedName = nameToInvite.value.replace(/ /g, '%20');
        const message = `Assalamu'alaikum ${nameToInvite.value}!\nDengan penuh kebahagiaan, kami mengundang saudara/ saudari untuk menghadiri pernikahan kami:\n\n🤵 Iqram & Yaumil 👰\n\n📨 Undangan lengkap dan detail acara bisa kamu lihat di sini:\nhttps://wedding-invitation-livid-rho.vercel.app/${encodedName}\n\nMerupakan kehormatan dan kebahagiaan bagi kami apabila saudara/ saudari ${nameToInvite.value} berkenan hadir dan memberikan doa restu.\nTerima kasih, dan sampai jumpa di hari bahagia kami! 🤍`
        navigator.clipboard.writeText(message).then(() => {
            alert('Pesan telah disalin ke clipboard. Silakan buka Instagram dan tempelkan pesan tersebut secara manual.');
            window.open('https://www.instagram.com/', '_blank');
        });
    }
</script>