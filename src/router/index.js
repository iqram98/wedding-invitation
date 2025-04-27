import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverPage.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/:name?",
        name: "Cover",
        component: CoverPage, // 👈 use CoverPage here
        props: true, // Pass route params as props to the component
    },
    {
        path: "/:name?/invitation",
        name: "Home",
        component: Home,
        props: true, // Pass route params as props to the component
        beforeEnter: (to, from, next) => {
            // Check if the name parameter is present
            if (!to.params.name) {
                // Redirect to the CoverPage if name is not present
                next({ name: "Cover" });
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
