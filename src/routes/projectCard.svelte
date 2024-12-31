<script>
    // Using $props to access the incoming props
    let { imageSrc, description, title, link, skills = null} = $props();

    import Skill from "./skill.svelte";

    
     console.log(skills)

    
    
</script>

<div class="group grid transition-all gap-x-0
            xl:grid-cols-[34rem_0rem] xl:hover:grid-cols-[26rem_8rem] xl:gap-y-4
            lg:grid-cols-[28rem_0rem] lg:hover:grid-cols-[22rem_6rem] lg:gap-y-3
            md:grid-cols-[20rem_0rem] md:hover:grid-cols-[14rem_6rem] md:gap-y-0">
    <div class="ml-auto mr-auto border-0 border-white shadow-whiteGl group-hover:shadow-whiteG group-hover:border-4 rounded-md  flick bg-black/60 transition-all row-span-8 col-span-1 
            lg:h-[25rem] 
            xl:h-[30rem]
            md:h-[20rem]">
        <div class="a">

        </div>
        <div class="a relative">
            <img class=" z-0 rounded-lg transition-all" alt="Project preview" src="{imageSrc}">
            <div 
            class="absolute flex justify-center items-center
                    text-white text-xl font-bold opacity-0 tex hover:opacity-100 transition-all underline text-cyan-200"
        >
            <a href={link}> 
                Link to project
            </a>
            </div>
        </div>
        <div class="p-4 text-center w-full ">
            <h2 class="text-xl font-bold text-white mb-2">{title}</h2>
            <p class="text-gray-200 text-sm">
                {description}
            </p>  

        </div>

    </div>
    <!-- <div></div> -->
    {#if skills !== null}
    <div class="skill border-b-2 ml-4  w-full text-yellow-400 border-y-yellow-400 col-span-1 bg-blue-400/0 flex justify-center items-center h-full {"grow1"} scale-0 overflow-hidden transition-all
    text-3xl font-bold">
    Skills:
    </div>
        {#each skills as skill, i}
            <div class="skill border-b-2 ml-4 w-full border-y-white col-span-1 bg-blue-400/0 flex justify-center items-center h-full {"grow" + (i+2)} scale-0 overflow-hidden transition-all
                         text-md font-bold">
                {skill.title}
            </div>
        {/each}
    {/if}

</div>


<style>
    .a:hover .tex {
        opacity: 100%;
    }

    .a:hover img {
        filter:blur(4px);
    }
    
    .tex {
        inset: 0% 0%;
    }

    @keyframes move {
        0% {transform: rotate3d(0);}
        25% {transform: rotate3d(0, 0, 1, 0.7deg);}
        50% {transform: rotate3d(0, 0, 0, 0);}
        75% {transform: rotate3d(0, 0, 1, -0.7deg);}
        100% {transform: rotate3d(0);}
    }
    /* @keyframes grow {
        0% {transform: scale(0);}
        100% {transform: scale(100%);}
    } */
    @keyframes grow {
        0% {transform: scaleX(0) translateX(-10rem);}
        100% {transform: scaleX(100%) translateX(0rem);}
    }

    .group:hover .flick {
        animation: move linear 0.45s 1 forwards;
    }

    .group:hover .grow1 {
        animation: grow 0.25s 0s 1 forwards;
    }
    .group:hover .grow2 {
        animation: grow 0.25s 0.15s 1 forwards;
    }
    .group:hover .grow3 {
        animation: grow 0.25s 0.3s 1 forwards;
    }
    .group:hover .grow4 {
        animation: grow 0.25s 0.45s 1 forwards;
    }
    .group:hover .grow5 {
        animation: grow 0.25s 0.6s 1 forwards;
    }
    .group:hover .grow6 {
        animation: grow 0.25s 0.75s 1 forwards;
    }
    .group:hover .grow7 {
        animation: grow 0.25s 0.9s 1 forwards;
    }
    .group:hover .grow8 {
        animation: grow 0.25s 1.05s 1 forwards;
    }
</style>