<script>
    let { description, title  } = $props();
    
</script>

<div class=" bg-red-500">
    test
</div>

<style>
    @keyframes move {
        0% {transform: rotate3d(0);}
        25% {transform: rotate3d(0, 0, 1, 0.7deg);}
        50% {transform: rotate3d(0, 0, 0, 0);}
        75% {transform: rotate3d(0, 0, 1, -0.7deg);}
        100% {transform: rotate3d(0);}
    }

    
</style>