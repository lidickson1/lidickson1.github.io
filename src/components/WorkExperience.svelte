<script>
    export let company;
    export let title;
    export let list;
</script>

<div class="md:flex md:items-baseline" data-aos="fade-right">
    <h1 class="text-2xl mr-6">{company}</h1>
    <h1 class="text-xl mt-3 font-bold text-blue-900 dark:text-blue-300">
        {title}
    </h1>
</div>
<div class="grid md:grid-cols-3 gap-6 mb-6">
    <ul class="md:col-span-2 list-disc my-4" data-aos="fade-right">
        {#each list as item, index (index)}
            <li class="text-slate-700 dark:text-slate-300">
                {item}
            </li>
        {/each}
    </ul>
    <div data-aos="fade-left">
        <slot name="image" />
    </div>
</div>
