<script>
    import { aosAttachment } from "svelte-aos";

    let { company, title, dates, list, image } = $props();
</script>

<div>
    <div class="xl:flex xl:items-baseline" {@attach aosAttachment({ animation: "fade-right" })}>
        <h1 class="text-2xl mr-6">{company}</h1>
        <h1 class="text-xl mt-3 font-bold text-blue-900 dark:text-blue-300">
            {title}
        </h1>
        <h3 class="ml-auto mr-3 text-gray-500 dark:text-gray-400">{dates}</h3>
    </div>
    <div class="grid md:grid-cols-3 md:gap-24">
        <ul
            class="md:col-span-2 list-disc my-4"
            {@attach aosAttachment({ animation: "fade-right" })}
        >
            {#each list as item, index (index)}
                <li class="text-slate-700 dark:text-slate-300">
                    {item}
                </li>
            {/each}
        </ul>
        <div
            {@attach aosAttachment({ animation: "fade-left" })}
            class="flex justify-center md:justify-end items-center"
        >
            {@render image()}
        </div>
    </div>
</div>
