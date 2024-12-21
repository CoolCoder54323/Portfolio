<script>

    import ProjectCard from "./projectCard.svelte";

    let prop_description = "Prop sto is an AI powered basketball statistics aggregator and visualizer"
    let bash_description = "BashPlay is a command-line music player, that fetches songs from itunes written in bash and installable with homebrew!"
    let nn_description = "Custom Nueral Network built from numpy and animated with manim"

</script>
<div class="min-h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 text-center">
    <div class=" mt-8 text-center ml-auto mr-auto text-3xl font-semibold">
        My Projects 🛠️ 🎨
    </div>
    <div class="w-fit mt-20 mb-5 ml-auto mr-auto grid xl:grid-cols-2 gap-y-12 sm:grid-cols-2 gap-x-12 xl:gap-x-32 grid-cols-1 grid-flow-dense justify-items-start">
        <ProjectCard imageSrc="propStopPreview.png" description={prop_description} title={"Prop Stop"} link="https://propstop.vercel.app">

        </ProjectCard>
        <ProjectCard imageSrc="NurualNetworkPreview.png" description={nn_description} title={"Nueral Net"}, link={"https://github.com/CoolCoder54323/Neural-Net"}>

        </ProjectCard>
               <ProjectCard imageSrc="bashMusicPreview.png" description={bash_description} title={"Bash Music"} link = "https://github.com/CoolCoder54323/homebrew-bashMusic">

        </ProjectCard> 
        <ProjectCard imageSrc="propStopPreview.png" description={prop_description} title={"Prop Stop"} link = "https://github.com/CoolCoder54323/PropStopOdds_Beta2">

        </ProjectCard>


    </div>


</div>