<script>
    import Icon from "@iconify/svelte";
    import NavbarLink from "./NavbarLink.svelte";

    let { items } = $props();

    let show = $state(false);
</script>

<div class="hidden md:flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hidden">
    {#each items as { text, link }}
        <NavbarLink {text} {link} />
    {/each}
</div>
<div class="md:hidden">
    <div class="flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white">
        <button
            class="px-6 py-6 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer text-3xl"
            onclick={() => {
                show = !show;
            }}
        >
            <Icon icon="mdi-menu" />
        </button>
    </div>
    {#if show}
        <button
            class="flex flex-col bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white"
            onclick={() => {
                show = false;
            }}
        >
            {#each items as { text, link }}
                <NavbarLink {text} {link} />
            {/each}
        </button>
    {/if}
</div>
