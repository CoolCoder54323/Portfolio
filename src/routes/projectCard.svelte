<script>
    // Using $props to access the incoming props
    let { imageSrc, description, title, link } = $props();
    
</script>

<div class="ml-auto mr-auto shadow-whiteG rounded-md border-4 bg-black/60 transition-all hover:scale-105
            md:w-[20rem]">
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