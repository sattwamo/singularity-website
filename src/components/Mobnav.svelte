<script>
    export let y;
    export let tabs;
</script>

<nav class={"block sm:hidden sticky z-[10] bottom-0 duration-200 px-6 flex items-center justify-between border border-solid w-full " + (y > 0 ?
    "py-4 bg-slate-950 border-transparent" :
    "py-6 bg-transparent border-transparent")}>

    <div class="flex items-center gap-10 mx-auto justify-between">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-yellow-400">
                <i class={tab.icon}></i>
            </a>
        {/each}
    </div>
</nav>