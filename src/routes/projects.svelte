<script>

    import ProjectCard from "./projectCard.svelte";
    import Skill from "./skill.svelte";

    let prop_description = "Prop sto is an AI powered basketball statistics aggregator and visualizer"
    let bash_description = "BashPlay is a command-line music player, that fetches songs from itunes written in bash and fully installable via homebrew!"
    let nn_description = "Custom Nueral Network built from numpy and animated with manim"
    let ps_description = "This portfolio!"

    let prop_skills = [
        { title: "Fullstack Development"},
        { title: "📊 Data Visualization"},
        { title: "☕ Javascript", description: "" },
        { title: "SQLite", description: "" },
        { title: "📄 HTML", description: "" },
        { title: "🔥 SvelteKit ", description: "" },
        { title: "🤖 APIs ", description: "" },


    ];

    let Neural_skills = [
        { title: "🐍 Python" },
        { title: "⚛️ NumPy " },
        { title: "Machine Learning" },
        { title: "🧠 Neural Networks " },
        { title: "Linear Algebra " },
        { title: "Backpropagation " },
    ];

    let bash_skills = [ { title: "Bash Scripting"}
                        ,{ title: "API interfacing"},
                        { title: "homebrew"}
    ]

    let portfolio_skills = [ { title: "🎨 UI/UX Design"},
                            { title: "⚡ Responsive Design" },
                            { title: "🌟 Animations" },]


</script>
<div class="min-h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 text-center">
    <div class=" mt-8 text-center ml-auto mr-auto text-4xl font-semibold ">
        My Projects 🛠️ 🎨
    </div>
    <div class=" ml-auto mr-auto w-fit mt-20 p-8 mb-5 grid xl:grid-cols-2 gap-y-12 md:grid-cols-2 gap-x-12 xl:gap-x-32 grid-cols-1 grid-flow-dense justify-items-start">
        <ProjectCard imageSrc="propStopPreview.png" description={prop_description} 
                     title={"Prop Stop"} link="https://propstop.vercel.app" skills={prop_skills}/>

        <ProjectCard imageSrc="NurualNetworkPreview.png" description={nn_description} 
                     title={"Nueral Net"}, link={"https://github.com/CoolCoder54323/Neural-Net"} skills={Neural_skills}/>

        <ProjectCard imageSrc="bashMusicPreview.png" description={bash_description} 
                     title={"Bash Music"} link = "https://github.com/CoolCoder54323/homebrew-bashMusic" skills={bash_skills}/>

        <ProjectCard imageSrc="portfolioPreview.png" description={ps_description} 
                     title={"Portfolio site"} link = "https://coolcoder54323.github.io/Portfolio/" skills={portfolio_skills}/>
    </div>


</div>