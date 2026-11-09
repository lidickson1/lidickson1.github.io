<script>
    import Button from "#lib/components/Button.svelte";
    import Carousel from "#lib/components/Carousel.svelte";
    import Link from "#lib/components/Link.svelte";
    import { aosAttachment } from "svelte-aos";

    import bbr from "#lib/assets/bbr/bbr.png";
    import bbr_square from "#lib/assets/bbr/bbr_square.png";
</script>

<div class="section grid md:grid-cols-4 gap-14 py-20 bg-stone-950 text-white">
    <div class="flex flex-col justify-center" {@attach aosAttachment({ animation: "fade-right" })}>
        <img
            style="box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);"
            src={bbr_square}
            alt="Bayview Battle Royale Logo"
        />
    </div>
    <div
        class="md:col-span-2 flex flex-col justify-center"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        <div>
            <h1 class="text-5xl text-center font-bold">Bayview Battle Royale</h1>
            <p class="mt-12 mb-6">
                A Minecraft server dedicated to provide the most unique and fun battle royale
                experience. Featuring responsive and satisfying gunplay, exciting and challenging
                gamemodes, as well as stylish cosmetics.
                <br />
                <br />
                Since its release, we have obtained more than 4000 unique player logins. Our success
                has led us to officially acquired by the #1 Minecraft gun server - <Link
                    text="Gun Colony"
                    url="https://guncolony.com"
                />, which has a total of 200,000 players and over 100,000 hours of playtime.
            </p>
            <div class="bg-amber-400 text-neutral-800 rounded-md p-4">
                <p>
                    On May 22th, 2021, we have officially announced the closure of Bayview Battle
                    Royale. The future of the server is currently in the hands of Gun Colony, and we
                    sincerely hope something good will come out of this in the future. We would also
                    like to thank all of our valuable players for being a part of the BBR community.
                </p>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-center" {@attach aosAttachment({ animation: "fade-left" })}>
        <img src={bbr} alt="Bayview Battle Royale" />
    </div>
</div>

<div class="section bg-stone-900">
    <h1
        class="text-4xl font-bold text-center text-white mb-10"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        Battle Royale
    </h1>
    <p class="text-stone-300 mb-8" {@attach aosAttachment({ animation: "fade-up" })}>
        Our flagship gamemode &mdash; Battle Royale, is the first to bring the mainstream game
        phenomenon of the decade to Minecraft. You drop from the plane along with 60 other players,
        gather loot and gear up while constantly keeping track of the shrinking zone. Air drops
        spawn every 5 minutes which contain the best loot. Kill or outlast the other players and the
        last man standing wins!
        <br />
        <br />
        We currently have a total of 5 expansive maps that are included in Battle Royale, each with its
        own unique landscape and locations &mdash; from the snowy tundra of Bavaria, to the dense metropolitan
        area centered around Stadium. The gamemode also has a diverse arsenal of over 20 weapons, and
        each gun uses a different caliber and supports different attachments, adding great depth to the
        gameplay.
    </p>
    <Carousel
        images={[
            "bbr/battle_royale/0.png",
            "bbr/battle_royale/1.png",
            "bbr/battle_royale/2.png",
            "bbr/battle_royale/3.png",
            "bbr/battle_royale/4.png",
            "bbr/battle_royale/5.png",
        ]}
    ></Carousel>
</div>

<div class="section bg-stone-950">
    <h1
        class="text-4xl font-bold text-center text-white mb-10"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        Bots
    </h1>
    <p class="text-stone-300 mb-8" {@attach aosAttachment({ animation: "fade-up" })}>
        I developed/invented the first ever fully autonomous Minecraft FPS bots that act like real
        players. They can acquire targets, intelligently path find to various locations and
        waypoints, and can shoot remarkably well. All of the AI code is done from scratch without
        any external libraries. It has also been optimized so that it does not impact server
        performance nor eat up too many resources. The server is still able to run smooth even on
        slow/budget hardware.
        <br />
        <br />
        Having bots in matches meant that players can still have an intense gameplay experience even
        during inactive hours when there are less players online. For example, despite the fact that
        most of the players are from North America, European/Asian players are still able to have fun.
        As a result, we are able to obtain a huge increase in player engagement and longer playtime by
        300%.
    </p>
    <Carousel images={["bbr/bots/0.png", "bbr/bots/1.png", "bbr/bots/2.png"]}></Carousel>
</div>

<div class="section bg-stone-900">
    <h1
        class="text-4xl font-bold text-center text-white mb-10"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        Cosmetics
    </h1>
    <div class="mb-8">
        <p class="text-stone-300 mb-4" {@attach aosAttachment({ animation: "fade-up" })}>
            Players can choose to purchase cosmetics (with real money) to support the server. Some
            examples include gun skins, crates, wearable items, and more. A fully functional website
            (link below) was implemented that provides a modern and convenient interface for players
            to browse and buy from our store. Players can also easily equip and check out their
            cosmetics with a simple and elegant GUI.
        </p>
        <div class="flex justify-center">
            <Button text="Check out the webstore here" url="https://bbrmc.craftingstore.net/" />
        </div>
    </div>
    <Carousel
        images={[
            "bbr/cosmetics/0.png",
            "bbr/cosmetics/1.png",
            "bbr/cosmetics/2.png",
            "bbr/cosmetics/3.png",
        ]}
    ></Carousel>
</div>
