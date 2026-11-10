<script>
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import { aosAttachment } from "svelte-aos";

    const assets = import.meta.glob("/src/lib/assets/**", {
        eager: true,
        query: "?url",
        import: "default",
    });

    let { images } = $props();
</script>

<Splide
    options={{ rewind: true, autoplay: true, interval: 3000 }}
    aria-label="My Favorite Images"
    {@attach aosAttachment({ animation: "fade-up" })}
>
    {#each images as image}
        <SplideSlide>
            <img src={assets[`/src/lib/assets/${image}`]} alt="" />
        </SplideSlide>
    {/each}
</Splide>
