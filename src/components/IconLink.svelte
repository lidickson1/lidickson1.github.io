<script>
    import Icon from "@iconify/svelte";

    export let icon;
    export let link;
</script>

<a
    class="transition ease-in-out duration-200 hover:text-blue-400"
    href={link}
    target="_blank"
    rel="noopener noreferrer"><Icon {icon} /></a
>
