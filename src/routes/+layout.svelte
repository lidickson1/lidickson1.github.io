<script>
    import "../app.css";
    import Navbar from "$components/Navbar.svelte";
    import Footer from "../Footer.svelte";

    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    onMount(() => AOS.init({ once: true }));
</script>

<!-- overflow-x-hidden: https://github.com/michalsnik/aos/issues/234#issuecomment-338496022 -->
<div
    class="dark:bg-slate-900 dark:text-white flex flex-col justify-between min-h-screen overflow-x-hidden"
>
    <Navbar
        items={[
            { text: "Home", link: "/" },
            { text: "Bayview Battle Royale", link: "/bbr" },
            { text: "Love Letter", link: "/love_letter" },
        ]}
    />
    <!-- we wrap it in a div to treat the content as one flex item -->
    <div>
        <slot />
    </div>
    <Footer />
</div>
