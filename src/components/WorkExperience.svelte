<script>
    export let company;
    export let title;
    export let dates;
    export let list;
</script>

<div class="xl:flex xl:items-baseline" data-aos="fade-right">
    <h1 class="text-2xl mr-6">{company}</h1>
    <h1 class="text-xl mt-3 font-bold text-blue-900 dark:text-blue-300">
        {title}
    </h1>
    <h3 class="ml-auto mr-3 text-gray-500 dark:text-gray-400">{dates}</h3>
</div>
<div class="grid md:grid-cols-3 md:gap-24 mb-14 md:mb-6">
    <ul class="md:col-span-2 list-disc my-4" data-aos="fade-right">
        {#each list as item, index (index)}
            <li class="text-slate-700 dark:text-slate-300">
                {item}
            </li>
        {/each}
    </ul>
    <div data-aos="fade-left" class="flex flex-col justify-center">
        <slot name="image" />
    </div>
</div>
