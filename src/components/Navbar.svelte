<script>
    import NavbarLink from "./NavbarLink.svelte";
    import Icon from "@iconify/svelte";

    export let items; //text and link

    let show = false;
</script>

<div
    class="hidden md:flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hidden"
>
    {#each items as { text, link }}
        <NavbarLink {text} {link} />
    {/each}
</div>
<div class="md:hidden">
    <div
        class="flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white"
    >
        <div
            class="px-6 py-6 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer text-3xl"
            on:click={() => {
                show = !show;
            }}
            aria-hidden
        >
            <Icon icon="mdi-menu" />
        </div>
    </div>
    {#if show}
        <div
            class="flex flex-col bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white"
            on:click={() => {
                show = false;
            }}
            aria-hidden
        >
            {#each items as { text, link }}
                <NavbarLink {text} {link} />
            {/each}
        </div>
    {/if}
</div>
