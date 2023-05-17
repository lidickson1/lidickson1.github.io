<script>
    export let name;
    export let description;
    export let url;
</script>

<div data-aos="flip-left">
    <a
        class="flex flex-col h-full justify-between rounded-lg bg-slate-100 dark:bg-gray-800 transition hover:scale-105"
        href={url}
        target={url?.startsWith("/") ? undefined : "_blank"}
        rel={url?.startsWith("/") ? undefined : "noopener noreferrer"}
    >
        <h1
            class="text-2xl text-center font-bold py-8 text-slate-700 dark:text-white"
        >
            {name}
        </h1>
        <slot name="image" />

        <div class="px-6 py-8">
            <!-- <div class="flex mb-4">
            <span
                class="inline-flex items-center rounded-md px-2 py-1 text-s font-medium bg-sky-500 text-white"
                >Badge</span
            >
        </div> -->
            <p class="text-slate-700 dark:text-slate-300 text-center">
                {description}
            </p>
        </div>
    </a>
</div>
