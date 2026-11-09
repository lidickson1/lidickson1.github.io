<script lang="ts">
    import favicon from "#lib/assets/favicon.svg";
    import Link from "#lib/components/Link.svelte";
    import Navbar from "#lib/components/Navbar.svelte";
    import { AOS } from "svelte-aos";
    import type { LayoutProps } from "./$types";

    import "@splidejs/svelte-splide/css";
    import "svelte-aos/styles/full.css";
    import "./layout.css";

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<AOS options={{ once: true }} />

<div class="dark:bg-slate-900 dark:text-white flex flex-col min-h-screen">
    <Navbar
        items={[
            { text: "Home", link: "/" },
            { text: "Bayview Battle Royale", link: "/bbr" },
            { text: "Love Letter", link: "/love_letter" },
        ]}
    />
    <!-- we wrap it in a div to treat the content as one flex item -->
    <div>
        {@render children()}
    </div>

    <footer class="px-4 py-6 bg-slate-100 dark:bg-slate-800">
        <p class="text-center text-sm">
            Built by Dickson Li with
            <Link text="SvelteKit" url="https://kit.svelte.dev/" /> and <Link
                text="Tailwind CSS"
                url="https://tailwindcss.com/"
            />. Contact me on <Link text="LinkedIn" url="https://www.linkedin.com/in/lidickson1/" />
            and visit my <Link text="GitHub" url="https://github.com/lidickson1" />
        </p>
    </footer>
</div>
