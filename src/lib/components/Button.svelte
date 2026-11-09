<script>
    import { aosAttachment } from "svelte-aos";

    let { text, url } = $props();
</script>

<a
    class="bg-slate-300 hover:bg-slate-400 text-black px-4 py-2 rounded-md"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    {@attach aosAttachment({ animation: "zoom-in" })}
>
    {text}
</a>
