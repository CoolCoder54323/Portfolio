<script>

    import ProjectCard from "./projectCard.svelte";
    import Skill from "./skill.svelte";

    let prop_description = "Prop sto is an AI powered basketball statistics aggregator and visualizer"
    let bash_description = "BashPlay is a command-line music player, that fetches songs from itunes written in bash and installable with homebrew!"
    let nn_description = "Custom Nueral Network built from numpy and animated with manim"

    let prop_skills = [
        { title: "Java ☕", description: "Framework design and libraries" },
        { title: "React ⚛️", description: "sum goofy shit" },
        { title: "HTML 🌐", description: "HEY HI HELLO" },
        { title: "popoo 💩", description: "HEY HI HELLO" }
    ];

    let bop_skills = [
        { title: "Numpy ☕", description: "Framework design and libraries" },
        { title: "data ⚛️", description: "sum goofy shit" },
        { title: "HTML 🌐", description: "HEY HI HELLO" },
        { title: "popoo 💩", description: "HEY HI HELLO" }
    ];

</script>
<div class="min-h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 text-center">
    <div class=" mt-8 text-center ml-auto mr-auto text-3xl font-semibold sm:text-red-50 md:text-red-300 lg:text-red-700 xl:text-red-900">
        My Projects 🛠️ 🎨
    </div>
    <div class=" ml-auto mr-auto w-fit mt-20 p-8 mb-5 grid xl:grid-cols-2 gap-y-12 md:grid-cols-2 gap-x-12 xl:gap-x-32 grid-cols-1 grid-flow-dense justify-items-start">
        <ProjectCard imageSrc="propStopPreview.png" description={prop_description} 
                     title={"Prop Stop"} link="https://propstop.vercel.app" skills={prop_skills}/>

        <ProjectCard imageSrc="NurualNetworkPreview.png" description={nn_description} 
                     title={"Nueral Net"}, link={"https://github.com/CoolCoder54323/Neural-Net"} skills={bop_skills}/>

        <ProjectCard imageSrc="bashMusicPreview.png" description={bash_description} 
                     title={"Bash Music"} link = "https://github.com/CoolCoder54323/homebrew-bashMusic"/>

        <ProjectCard imageSrc="propStopPreview.png" description={prop_description} 
                     title={"Prop Stop"} link = "https://github.com/CoolCoder54323/PropStopOdds_Beta2"/>
    </div>


</div>