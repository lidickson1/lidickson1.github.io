<script>
    import Icon from "@iconify/svelte";

    let { icon, link } = $props();
</script>

<a
    class="transition ease-in-out duration-200 hover:text-blue-400"
    href={link}
    target="_blank"
    rel="noopener noreferrer"><Icon {icon} /></a
>
