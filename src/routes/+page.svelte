<div class="">

</div>


<script>
    import '../app.css';
    import './landing.svelte'
    import './about.svelte'
    import Landing from './landing.svelte';
    import About from './about.svelte';

    // @ts-ignore
    import { onMount } from 'svelte';
    import Projects from './projects.svelte';
   
    // @ts-ignore
    /**
     * @type {import("svelte").SvelteComponent<{ [x: string]: never; }, { [evt: string]: CustomEvent<any>; }, {}> & { $$bindings?: string | undefined; }}
     */
    let landing;
    export const prerender = true;
    
    let scrollDown;
    let i = 0;
    let pages = 3
    let scroll = 0;
    let pageHeight = 0;
    let bounce = true;

    function nextPage() {
        console.log("scroll " + (scroll + 5) + "/" + pageHeight + "=" + (window.scrollY + 5)/pageHeight)
        i = Math.trunc((scroll + 6)/pageHeight);
        console.log(i)

        if(i < pages - 1)
            i++;
        else
            i = 0;
        
        return i;
    }

    onMount(()=>{
        scrollDown = ()=> {
            console.log("next " + window.scrollY)
            // console.log(landing)
        window.scrollTo({
            // @ts-ignore
            top:window.innerHeight * nextPage(),
            behavior:'smooth',
    })
        // landing.scrollTo()
    }
    })
    


</script>

<svelte:window bind:scrollY={scroll} ></svelte:window>
<div bind:clientHeight={pageHeight}>
    <Landing bind:this={landing}>
    </Landing>
</div>
<div class="w-screen">

<About/>
<Projects/>


<div class="left-1/2 -translate-x-1/2 text-white transform fixed bottom-6 " >
    <button on:click={scrollDown} class="h-12 w-16 transition-all hover:scale-105 {bounce && "bounceIt"}" on:mouseenter={()=> bounce = false}>
        <img class=" {scroll > (pages - 1.5)*pageHeight && "rotate-180"} absolute opacity-65 transition-all hover:opacity-100 -translate-y-6 rounded-md shadow-blackG z-10" src="down-arrow.svg" alt="down arrow">

    </button>

</div>   
</div>


<style>
    @keyframes bounce {
        0% {transform: translateY(0);}
        50% {transform: translateY(-1rem);}
        100% {transform: translateY(0);}
    }

    .bounceIt {
        animation: bounce 1s 1s 5;
    }

    .bounceIt:hover {
        animation: none;
    }
</style>
