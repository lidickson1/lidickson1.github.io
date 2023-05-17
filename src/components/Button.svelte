<script>
    export let text;
    export let url;
</script>

<button
    class="bg-slate-300 hover:bg-slate-400 text-black px-4 py-2 rounded-md"
    data-aos="zoom-in"
    on:click={() => window.open(url, "_blank")}>{text}</button
>
