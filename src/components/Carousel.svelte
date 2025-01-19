<script>
    import { browser } from "$app/environment";
    import Carousel from "svelte-carousel";
</script>

<div class="-mx-10 md:mx-0 carousel-wrapper">
    {#if browser}
        <Carousel autoplay>
            <slot />
        </Carousel>
    {/if}
</div>

<style>
    /* https://stackoverflow.com/a/45945811 */
    .carousel-wrapper :global(img) {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>
