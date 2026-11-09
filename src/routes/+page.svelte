<script>
    import alice_maze from "#lib/assets/alice_maze.png";
    import bbr from "#lib/assets/bbr/bbr.png";
    import hacker_match from "#lib/assets/hackermatch/hacker_match.png";
    import kidney from "#lib/assets/kidney.png";
    import love_letter from "#lib/assets/love_letter/love_letter.png";
    import my_face from "#lib/assets/my_face.jpg";
    import sogolf from "#lib/assets/sogolf.png";
    import wiki from "#lib/assets/wiki.png";
    import IconLink from "#lib/components/IconLink.svelte";
    import Project from "#lib/components/Project.svelte";
    import WorkExperience from "#lib/components/WorkExperience.svelte";
    import Icon from "@iconify/svelte";
    import { aosAttachment } from "svelte-aos";

    const images = import.meta.glob("/src/lib/assets/*", {
        eager: true,
        query: "?url",
        import: "default",
    });
    console.log(images);
</script>

<div class="section">
    <div class="grid md:grid-cols-3 gap-10">
        <div
            class="md:col-span-2 flex flex-col justify-center"
            {@attach aosAttachment({ animation: "fade-right" })}
        >
            <!-- <div> -->
            <h1 class="text-6xl font-bold">Dickson Li</h1>
            <p class="my-16 text-slate-700 dark:text-white">
                Software engineer with 6+ years of development experience, effective collaborator,
                constantly striving to provide the most professional and outstanding results
                <br />
                Graduated from the University of Toronto as a Computer Science Specialist in spring 2024
            </p>
            <div class="flex justify-around text-4xl">
                <IconLink icon="mdi-github" link="https://github.com/lidickson1" />
                <IconLink icon="mdi-linkedin" link="https://www.linkedin.com/in/lidickson1/" />
                <IconLink icon="mdi-email" link="mailto:lidickson1@gmail.com" />
            </div>
            <!-- </div> -->
        </div>
        <img src={my_face} alt="Dickson Li" {@attach aosAttachment({ animation: "fade-left" })} />
    </div>
    <div class="flex justify-center mt-12 text-3xl h-10">
        <Icon icon="bi:chevron-down" class="animate-bounce" />
    </div>
</div>

<div class="section bg-slate-100 dark:bg-slate-800">
    <h1
        class="text-4xl font-bold text-center mb-10"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        Work Experience
    </h1>
    <WorkExperience
        company="Zūm Rails"
        title="Full Stack Developer"
        dates="2024 Aug - 2026 Sep"
        list={[
            "Developed and maintained both front-end and back-end of web applications to enhance performance, scalability, and user experience",
            "Maintained full stack web applications built with C#, Entity Framework, PostgreSQL, Angular, Typescript, Bootstrap for managing 1000+ transactions, users (bank accounts, cards), and 100+ customers every day",
            "Handled the integration with at least 8 third party Web API services with a team of core developers with state of the art security and PCI DSS compliant code",
            "Engineered and led the integration of US banking API providers for US payment rails such as Same Day ACH and RTP / FedNow, which are used to process thousands of USD transactions daily",
            "Responsible for handling multiple critical release deploys for new versions for 2 years",
            "Used AI tools like Claude Code and Copilot as an integral part of my development and coding workflow",
        ]}
    >
        {#snippet image()}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 51 22"
                class="p-16"
            >
                <path
                    d="M 0.024 21.206 L 13.25 21.206 L 13.25 17.31 L 5.867 17.31 L 12.933 8.568 L 12.933 5.352 L 0 5.352 L 0 9.247 L 7.157 9.247 L 0.022 18.035 L 0.022 21.206 Z M 16.262 15.067 C 16.262 19.439 19.046 21.499 23.214 21.499 C 27.403 21.499 30.189 19.437 30.189 15.067 L 30.189 5.352 L 25.796 5.352 L 25.796 15.09 C 25.796 16.743 24.821 17.808 23.214 17.808 C 21.583 17.808 20.655 16.743 20.655 15.09 L 20.655 5.352 L 16.262 5.352 L 16.262 15.067 Z M 33.792 21.206 L 37.935 21.206 L 37.935 11.376 L 42.353 17.401 L 46.768 11.376 L 46.768 21.206 L 50.868 21.206 L 50.868 5.352 L 46.565 5.352 L 42.353 11.24 L 38.162 5.352 L 33.792 5.352 Z"
                    fill="rgb(255,255,255)"
                />
                <path
                    d="M 30.224 0.5 L 16.203 0.5 L 16.203 2.441 L 30.224 2.441 Z"
                    fill="rgb(5,120,253)"
                />
            </svg>
        {/snippet}
    </WorkExperience>
    <!-- TODO include witte edu -->
    <WorkExperience
        company="Periscope Capital"
        title="Software Developer"
        dates="2022 May - 2024 April"
        list={[
            "Maintained and improved the in-house software built with C#, DevExpress, and WinForms",
            "Implemented more than 180 features and bug fixes over the course of my work term",
            "Managed several SQL databases (MySQL, Postgres) containing 10+ years worth of data",
            "Built a robust and flexible caching system that reduced over 90% boilerplate code while improving data lookup performance",
            "Engineered a database synchronization system that automatically clones production databases into a local environment, which sped up crucial development workflows by 10x",
            "Collaborated daily with team members and took frequent initiative in bug fixes and new features",
            // TODO talk about ModifiedHelper?
        ]}
    >
        {#snippet image()}
            <img
                src="https://www.periscopecap.com/images/periscope-capital.svg"
                alt="Periscope Capital"
            />
        {/snippet}
    </WorkExperience>
    <WorkExperience
        company="Kidney Health Education and Research Group"
        title="Full Stack Web Developer"
        dates="2021 May - 2022 May"
        list={[
            "Built and updated Wordpress web pages with PHP, Bootstrap, and MySQL database integration to enhance user experience by implementing new features and fixing critical bugs",
            "Engineered a research paper writing tool as a full stack web application using Javascript and Dropbox API, which boosted efficiency of writing papers by 40%",
            "Led a 4 man team on revamping a website's UX design in order to user traffic and retention using Figma, Bootstrap, and CSS",
        ]}
    >
        {#snippet image()}
            <img src={kidney} class="h-44 p-4" alt="Kidney Health Education and Research Group" />
        {/snippet}
    </WorkExperience>
    <WorkExperience
        company="So Golf Academy"
        title="Marketing Assistant"
        dates="2020 May - 2020 Aug"
        list={[
            "Designed the official website using Wix, resulting in significant increase in online traffic",
            "Implemented bilingual translation which gave access to Toronto's huge Chinese golfing customer base and led to a 50% increase in clients",
            "Created professional posters and flyers using Inkscape, increased customer engagement by 80%",
        ]}
    >
        {#snippet image()}
            <img class="h-44 p-4" src={sogolf} alt="So Golf Academy" />
        {/snippet}
    </WorkExperience>
</div>

<div class="section">
    <h1
        class="text-4xl font-bold text-center mb-10"
        {@attach aosAttachment({ animation: "fade-down" })}
    >
        My Projects
    </h1>
    <div class="grid md:grid-cols-3 gap-10">
        <Project
            name="Bayview Battle Royale"
            description="A Minecraft server built with Java, Kotlin, and the Spigot API, featuring guns, a variety of gamemodes, bots, and purchasable cosmetics"
            url="/bbr"
        >
            {#snippet image()}
                <img src={bbr} alt="Bayview Battle Royale" />
            {/snippet}
        </Project>
        <Project
            name="Love Letter"
            description="A full stack multiplayer web browser game based on the card game Love Letter™. Built using React, NextUI, Express, and Socket.IO. Deployed on Vercel and Fly.io"
            url="/love_letter"
        >
            {#snippet image()}
                <img src={love_letter} alt="Love Letter" />
            {/snippet}
        </Project>
        <Project
            name="Wiki Clone"
            description="A Wikipedia like website built using Javascript, Next.js, and Bulma. Deployed on Vercel"
            url="https://wiki-two-flame.vercel.app/"
        >
            {#snippet image()}
                <img src={wiki} alt="Wiki Clone" />
            {/snippet}
        </Project>
        <Project
            name="Job Applications Tracker"
            description="A full stack web app for tracking my job applications. Built with Angular, Spring Boot, Oracle SQL"
            url="https://github.com/lidickson1/job-apps-tracker"
        >
            {#snippet image()}
                <img
                    src="https://github.com/lidickson1/job-apps-tracker/raw/master/screenshot.png?raw=true"
                    alt="Job Applications Tracker"
                />
            {/snippet}
        </Project>
        <Project
            name="Alice Mazes"
            description="A React app where users can play, edit, or have it automatically solve logic mazes invented by Robert Abbott"
            url="https://alice-maze.vercel.app/"
        >
            {#snippet image()}
                <img src={alice_maze} alt="Alice Mazes" />
            {/snippet}
        </Project>
        <Project
            name="Hackermatch"
            description="A Tinder-like matching web app for hackers to easily find teammates for hackathons. Built with jQuery, Materialize, Node.js, Express, Heroku, and Firebase"
            url="/hackermatch"
        >
            {#snippet image()}
                <img src={hacker_match} alt="Hackermatch" />
            {/snippet}
        </Project>
        <Project
            name="Alchemy"
            description="A desktop game inspired by games like Little Alchemy and Doodle God with custom content support. Written in Java using the Processing Library."
            url="https://github.com/lidickson1/Alchemy2"
        >
            {#snippet image()}
                <img
                    src="https://github.com/lidickson1/Alchemy2/blob/master/screenshot.png?raw=true"
                    alt="Alchemy"
                />
            {/snippet}
        </Project>
    </div>
</div>
