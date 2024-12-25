<script>
    let { description, title  } = $props();
    
</script>

<div class=" bg-red-500">
    test
</div>

<style>
        @keyframes grow {
        0% {transform: scale(0);}
        100% {transform: scale(100%);}
    }
    .group:hover .grow1 {
        animation: grow 0.45s 1 forwards;
    }
    .group:hover .grow2 {
        animation: grow 0.15s 0.15s 1 forwards;
    }
    .group:hover .grow3 {
        animation: grow 0.15s 0.3s 1 forwards;
    }
    .group:hover .grow4 {
        animation: grow 0.15s 0.45s 1 forwards;
    }
    .group:hover .grow5 {
        animation: grow 0.15s 0.6 1 forwards;
    }
    .group:hover .grow6 {
        animation: grow 0.15s 0.75s 1 forwards;
    }
    .group:hover .grow7 {
        animation: grow 0.15s 1s 1 forwards;
    }
    .group:hover .grow8 {
        animation: grow 0.15s 1.25s 1 forwards;
    }
</style>