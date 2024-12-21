<script>
    // Using $props to access the incoming props
    let { imageSrc, description, title, link } = $props();
    
</script>

<div class="ml-auto mr-auto shadow-whiteG rounded-md border-4 flick bg-black/60 transition-all
            md:w-[20rem]">
        <div>

        </div>
        <a href={link}>
            <img class="ml-auto mr-auto" alt="Project preview" src="{imageSrc}">
        </a>
        <div class="p-4 text-center">
            <h2 class="text-xl font-bold text-white mb-2">{title}</h2>
            <p class="text-gray-200 text-sm">
                {description}
            </p>  

    </div>

</div>

<style>
    @keyframes move {
        0% {transform: rotate3d(0);}
        25% {transform: rotate3d(0, 0, 1, 0.7deg);}
        50% {transform: rotate3d(0, 0, 0, 0);}
        75% {transform: rotate3d(0, 0, 1, -0.7deg);}
        100% {transform: rotate3d(0) ; transform: scale(110%);}
    }

    .flick:hover {
        animation: move linear 0.45s 1 forwards;
    }
</style>