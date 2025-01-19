<script>
    import Link from "$components/Link.svelte";
</script>

<div class="section grid md:grid-cols-3 gap-10 py-20">
    <div class="flex flex-col md:col-span-2 justify-center" data-aos="fade-right">
        <div>
            <h1 class="text-5xl font-bold">Hackermatch</h1>
            <p class="my-8 text-slate-700 dark:text-white">
                A Tinder like matching web application for hackers to easily form teams for
                hackathons. Built using <Link
                    text="Materialize"
                    url="https://materializecss.com/"
                />, <Link text="jQuery" url="https://jquery.com/" />, <Link
                    text="NodeJS"
                    url="https://nodejs.org/en"
                />, Heroku and <Link text="Firebase" url="https://firebase.google.com/" />.
            </p>
            <!-- <Button
                text="Play now!"
                url="https://love-letter-resume.vercel.app/"
            /> -->
        </div>
    </div>
    <img src="/images/hacker_match.png" alt="Hackermatch" data-aos="fade-left" />
</div>

<div class="section bg-slate-100 dark:bg-slate-800">
    <div class="grid md:grid-cols-3 gap-10">
        <img
            class="md:col-span-2"
            src="/images/hackermatch/profile.png"
            alt=""
            data-aos="fade-left"
        />
        <div class="flex flex-col justify-center">
            <p>
                You can easily register an account, and then start by creating a profile and fill
                out your preferred technologies, custom keywords, and contact info.
            </p>
        </div>
    </div>
    <hr class="my-12 h-[0.05rem] border-t-0 bg-neutral-400" />
    <div class="grid md:grid-cols-4 gap-10">
        <div class="flex flex-col justify-center">
            <p>
                Potential matches are shown based on a custom matching algorithm that has been
                implemented which accounts for tech expertise and interests. You can choose to match
                or pass on a potential match.
            </p>
        </div>
        <img
            class="md:col-span-3"
            src="/images/hackermatch/matching.png"
            alt=""
            data-aos="fade-left"
        />
    </div>
    <hr class="my-12 h-[0.05rem] border-t-0 bg-neutral-400" />
    <div class="grid md:grid-cols-4 gap-10">
        <img
            class="md:col-span-3"
            src="/images/hackermatch/matches.png"
            alt=""
            data-aos="fade-left"
        />
        <div class="flex flex-col justify-center">
            <p>
                Once you have successfully matched with someone, you can view their contact info and
                introduce yourselves to each other. You can also choose to unmatch if the match is
                undesirable.
            </p>
        </div>
    </div>
</div>
