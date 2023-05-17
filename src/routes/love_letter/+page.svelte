<script>
    import Link from "$components/Link.svelte";
    import Button from "$components/Button.svelte";
</script>

<div class="section grid md:grid-cols-2 gap-10 py-20">
    <div class="flex flex-col justify-center" data-aos="fade-right">
        <div>
            <h1 class="text-5xl font-bold">Love Letter</h1>
            <p class="my-8 text-slate-700 dark:text-white">
                A full stack multiplayer web browser game based on the card game
                <Link
                    text="Love Letter™"
                    url="https://www.zmangames.com/en/games/love-letter/"
                />. Built using <Link text="React" url="https://react.dev" />, <Link
                    text="Bulma"
                    url="https://bulma.io/"
                />, <Link text="Express" url="https://expressjs.com/" />, and <Link
                    text="Socket.IO"
                    url="https://socket.io/"
                />. Deployed on <Link text="Vercel" url="https://vercel.com/" />
                and <Link text="Fly.io" url="https://fly.io/" />. The game can
                be played both on a computer and on a mobile device. It also has
                bot support.
            </p>
            <Button
                text="Play now!"
                url="https://love-letter-resume.vercel.app/"
            />
        </div>
    </div>
    <img src="images/love_letter.png" alt="Love Letter" data-aos="fade-left" />
</div>

<!-- <div class="section bg-slate-100 dark:bg-slate-800">
    <h1 class="text-4xl font-bold text-center mb-10" data-aos="fade-down">
        Work Experience
    </h1>
    <WorkExperience
        company="Periscope Capital"
        title="Software Developer Intern"
        list={[
            "Maintained and improved the in-house software built using C# and WinForms. Implemented various features and fixed critical bugs which led to increase in productivity.",
            "Managed and queried several SQL databases (including MySQL and Postgres) that contained 10+ years worth of data for the company.",
            // TODO talk about Cache and ModifiedHelper
        ]}
    >
        <img
            class="dark:bg-white"
            slot="image"
            src="https://www.periscopecap.com/wp-content/uploads/2018/09/cropped-periscope_big_logo.png"
            alt="Periscope Capital"
        /></WorkExperience
    >
    <WorkExperience
        company="Kidney Health Education and Research Group"
        title="Full Stack Web Developer"
        list={[
            "Built Wordpress web pages with PHP, Bootstrap, and MySQL database integration",
            "Engineered a full stack web application using Dropbox API which boosted efficiency of writing research papers by 40%",
            "Led a 4 man team on revamping a website's UX design using Figma prototyping and CSS",
        ]}
    >
        <img
            class="dark:bg-white"
            slot="image"
            src="https://nefros.net/wp-content/uploads/2018/07/nefros-logo_kherg-lettering-word-and.png"
            alt="Kidney Health Education and Research Group"
        /></WorkExperience
    >
    <WorkExperience
        company="So Golf Academy"
        title="Marketing Assistant"
        list={[
            "Designed the official website using Wix, resulting in significant increase in online traffic",
            "Implemented bilingual translation which gave access to Toronto's huge Chinese golfing customer base and led to a 50% increase in clients",
            "Created professional posters and flyers using Inkscape, increased customer engagement by 80%",
        ]}
    >
        <div class="flex justify-center" slot="image">
            <img class="h-52" src="images/sogolf.png" alt="So Golf Academy" />
        </div>
    </WorkExperience>
</div> -->

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
