
<script>
    let elem;

    
</script>
<div bind:this={elem} class=" bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 text-center h-screen items-center justify-center flex">
    <div class="h-fits">
        <img class="moveDown select-none ml-auto mr-auto border-4 rounded-full h-48 w-48 lg:h-64 lg:w-64" alt="headshot" src="face.png">
        <div class="mb-5">
            <h1 class="text-4xl font-bold mt-6 moveRight">Nicholas Dixon</h1>
            <p class=" text-xl text-slate-400 moveLeft">Aspiring software Dev</p>
        </div>

        <div class="flex justify-center gap-4 m-4 h-8 items-center">
            <a href="https://github.com/CoolCoder54323" class="p-1 bg-white rounded-sm transition-all h-8 md:h-9 hover:bg-cyan-400 hover:scale-110">
                <img alt="github logo" src="githublogo.svg" class="h-full">
            </a>
            <a href="https://www.linkedin.com/in/nicholas-dixon-q/" class="p-1 bg-white rounded-sm transition-all h-8 md:h-9 hover:bg-cyan-400 hover:scale-110">
                <img alt="linkedin logo" src="linkedinlogo.svg" class="h-full">
            </a>
            
        </div>
        <button class="bounceIt text-lg shadow-greenG m-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition-all scale-105 hover:scale-110">
        Contact me!
        </button>

    </div>

</div>

<style>
    @keyframes moveRight {
        0% { transform: translateX(-1.3rem); opacity: 0;}
        100% { transform: translateX(0); opacity: 1;}
    }

    @keyframes moveLeft {
        0% { transform: translateX(1.3rem); opacity: 0;}
        100% { transform: translateX(0); opacity: 1;}
    }
    @keyframes moveDown {
        0% { transform: translateY(2rem); opacity: 0;}
        100% { transform: translateY(0); opacity: 1;}
    }

    @keyframes bounce {
        0% {transform: scale(105%);}
        50% {transform: scale(110%);}
        100% {transform: scale(105%);}
    }

    .bounceIt {
        animation: bounce 2s 1;
    }

    .moveRight {
        animation: moveRight .7s ease-out 1;
    }
    .moveDown {
        animation: moveDown .7s ease-out 1;
    }
    .moveLeft {
        animation: moveLeft 1s ease-out 1;
    }
</style>