<script>
    import Icon from "@iconify/svelte";
    import IconLink from "$components/IconLink.svelte";
    import WorkExperience from "$components/WorkExperience.svelte";
    import Project from "$components/Project.svelte";

    import my_face from "$lib/images/my_face.jpg";
    import alice_maze from "$lib/images/alice_maze.png";
    import hacker_match from "$lib/images/hacker_match.png";
    import sogolf from "$lib/images/sogolf.png";
    import wiki from "$lib/images/wiki.png";
</script>

<div class="section">
    <div class="grid md:grid-cols-3 gap-10">
        <div class="md:col-span-2 flex flex-col justify-center" data-aos="fade-right">
            <div>
                <h1 class="text-6xl font-bold">Dickson Li</h1>
                <p class="my-16 text-slate-700 dark:text-white">
                    Software engineer with 6+ years of development experience, effective
                    collaborator, constantly striving to provide the most professional and
                    outstanding results
                    <br />
                    Graduated from the University of Toronto as a Computer Science Specialist in spring
                    2024
                </p>
                <div class="flex justify-around text-4xl">
                    <IconLink icon="mdi-github" link="https://github.com/lidickson1" />
                    <IconLink icon="mdi-linkedin" link="https://www.linkedin.com/in/lidickson1/" />
                    <IconLink icon="mdi-email" link="mailto:lidickson1@gmail.com" />
                </div>
            </div>
        </div>
        <img src={my_face} alt="Dickson Li" data-aos="fade-left" />
    </div>
    <div class="flex justify-center mt-12 text-3xl h-10">
        <Icon icon="bi:chevron-down" id="scroll-indicator" />
    </div>
</div>

<div class="section bg-slate-100 dark:bg-slate-800">
    <h1 class="text-4xl font-bold text-center mb-10" data-aos="fade-down">Work Experience</h1>
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
        dates="2021 May - 2022 May"
        list={[
            "Built and updated Wordpress web pages with PHP, Bootstrap, and MySQL database integration to enhance user experience by implementing new features and fixing critical bugs",
            "Engineered a research paper writing tool as a full stack web application using Javascript and Dropbox API, which boosted efficiency of writing papers by 40%",
            "Led a 4 man team on revamping a website's UX design in order to user traffic and retention using Figma, Bootstrap, and CSS",
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
        dates="2020 May - 2020 Aug"
        list={[
            "Designed the official website using Wix, resulting in significant increase in online traffic",
            "Implemented bilingual translation which gave access to Toronto's huge Chinese golfing customer base and led to a 50% increase in clients",
            "Created professional posters and flyers using Inkscape, increased customer engagement by 80%",
        ]}
    >
        <div class="flex justify-center" slot="image">
            <img class="h-44 mt-4" src={sogolf} alt="So Golf Academy" />
        </div>
    </WorkExperience>
</div>

<div class="section">
    <h1 class="text-4xl font-bold text-center mb-10" data-aos="fade-down">My Projects</h1>
    <div class="grid md:grid-cols-3 gap-10">
        <Project
            name="Bayview Battle Royale"
            description="A Minecraft server built with Java, Kotlin, and the Spigot API, featuring guns, a variety of gamemodes, bots, and purchasable cosmetics"
            url="/bbr"
            ><img slot="image" src="images/bbr.png" alt="Bayview Battle Royale" /></Project
        >
        <Project
            name="Love Letter"
            description="A full stack multiplayer web browser game based on the card game Love Letter™. Built using React, NextUI, Express, and Socket.IO. Deployed on Vercel and Fly.io"
            url="/love_letter"
            ><img slot="image" src="images/love_letter.png" alt="Love Letter" /></Project
        >
        <Project
            name="Wiki Clone"
            description="A Wikipedia like website built using Javascript, Next.js, and Bulma. Deployed on Vercel"
            url="https://wiki-two-flame.vercel.app/"
            ><img slot="image" src={wiki} alt="Wiki Clone" /></Project
        >
        <Project
            name="Job Applications Tracker"
            description="A full stack web app for tracking my job applications. Built with Angular, Spring Boot, Oracle SQL"
            url="https://github.com/lidickson1/job-apps-tracker"
            ><img
                slot="image"
                src="https://github.com/lidickson1/job-apps-tracker/raw/master/screenshot.png?raw=true"
                alt="Job Applications Tracker"
            /></Project
        >
        <Project
            name="Alice Mazes"
            description="A React app where users can play, edit, or have it automatically solve logic mazes invented by Robert Abbott"
            url="https://alice-maze.vercel.app/"
            ><img slot="image" src={alice_maze} alt="Alice Mazes" /></Project
        >
        <Project
            name="Hackermatch"
            description="A Tinder-like matching web app for hackers to easily find teammates for hackathons. Built with jQuery, Materialize, Node.js, Express, Heroku, and Firebase"
            url="/hackermatch"><img slot="image" src={hacker_match} alt="Hackermatch" /></Project
        >
        <Project
            name="Alchemy"
            description="A desktop game inspired by games like Little Alchemy and Doodle God with custom content support. Written in Java using the Processing Library."
            url="https://github.com/lidickson1/Alchemy2"
            ><img
                slot="image"
                src="https://github.com/lidickson1/Alchemy2/blob/master/screenshot.png?raw=true"
                alt="Alchemy"
            /></Project
        >
    </div>
</div>
