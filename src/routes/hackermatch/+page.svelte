<script>
    import Link from "$components/Link.svelte";
    import Button from "$components/Button.svelte";
</script>

<div class="section grid md:grid-cols-3 gap-10 py-20">
    <div
        class="flex flex-col md:col-span-2 justify-center"
        data-aos="fade-right"
    >
        <div>
            <h1 class="text-5xl font-bold">Hackermatch</h1>
            <p class="my-8 text-slate-700 dark:text-white">
                A Tinder like matching web application for hackers to easily
                form teams for hackathons. Built using <Link
                    text="Materialize"
                    url="https://materializecss.com/"
                />, <Link text="jQuery" url="https://jquery.com/" />, <Link
                    text="NodeJS"
                    url="https://nodejs.org/en"
                />, Heroku and <Link
                    text="Firebase"
                    url="https://firebase.google.com/"
                />.
            </p>
            <!-- <Button
                text="Play now!"
                url="https://love-letter-resume.vercel.app/"
            /> -->
        </div>
    </div>
    <img src="images/hacker_match.png" alt="Hackermatch" data-aos="fade-left" />
</div>

<div class="section bg-slate-100 dark:bg-slate-800">
    <div class="grid md:grid-cols-3 gap-10">
        <img src="images/hackermatch/profile.png" alt="" data-aos="fade-left" />
        <div class="flex flex-col justify-center md:col-span-2">
            <p>
                You can easily register an account, and then start by creating a
                profile and fill out your preferred technologies, custom
                keywords, and contact info.
            </p>
        </div>
    </div>
    <hr class="my-12 h-[0.05rem] border-t-0 bg-neutral-400" />
    <div class="grid md:grid-cols-2 gap-10">
        <div class="flex flex-col justify-center">
            <p>
                Navigate to the "Matching" tab and start matching! Potential
                matches are shown based on a custom matching algorithm that has
                been implemented which accounts for tech expertise and
                interests. You can choose to match or pass on a potential match.
            </p>
        </div>
        <img
            src="images/hackermatch/matching.png"
            alt=""
            data-aos="fade-left"
        />
    </div>
    <hr class="my-12 h-[0.05rem] border-t-0 bg-neutral-400" />
    <div class="grid md:grid-cols-2 gap-10">
        <img src="images/hackermatch/matches.png" alt="" data-aos="fade-left" />
        <div class="flex flex-col justify-center">
            <p>
                Once you have successfully matched with someone, you can view
                their contact info and introduce yourselves to each other. You
                can also choose to unmatch if the match is undesirable.
            </p>
        </div>
    </div>
</div>

<!-- <div class="section">
    <h1 class="text-4xl font-bold text-center mb-10" data-aos="fade-down">
        My Projects
    </h1>
    <div class="grid md:grid-cols-3 gap-10">
        <Project
            name="Bayview Battle Royale"
            description="A Minecraft server built with Java, Kotlin, and the Spigot API, featuring guns, a variety of gamemodes, bots, and purchasable cosmetics"
            url="/bbr"
            ><img
                slot="image"
                src="images/bbr.png"
                alt="Bayview Battle Royale"
            /></Project
        >
        <Project
            name="Love Letter"
            description="A full stack multiplayer web browser game based on the card game Love Letter™. Built using React, Bulma, Express, and Socket.IO. Deployed on Vercel and Fly.io"
            ><img
                slot="image"
                src="images/love_letter.png"
                alt="Love Letter"
            /></Project
        >
        <Project
            name="Alice Mazes"
            description="A React app where users can play, edit, or have it automatically solve logic mazes invented by Robert Abbott"
            ><img
                slot="image"
                src="images/alice_maze.png"
                alt="Alice Mazes"
            /></Project
        >
        <Project
            name="Hackermatch"
            description="A Tinder-like matching web app for hackers to easily find teammates for hackathons. Built with jQuery, Materialize, Node.js, Express, Heroku, and Firebase"
            ><img
                slot="image"
                src="images/hacker_match.png"
                alt="Hackermatch"
            /></Project
        >
        <Project
            name="Alchemy"
            description="A desktop game app inspired by games like Little Alchemy and Doodle God with full modding/addon support. Written in Java using the Processing Library."
            url="https://github.com/lidickson1/Alchemy2"
            ><img
                slot="image"
                src="https://cdn.discordapp.com/attachments/269226485951234068/664307072564985876/screenshot.png"
                alt="Alchemy"
            /></Project
        >
    </div>
</div> -->
