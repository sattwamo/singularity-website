<script>
    export let step;
    import Member from "./Member.svelte"
    import {isOverlayOpen, name} from "../stores/OverlayStore.js"
    // const currentName = $name
</script>

<a on:click={() => {isOverlayOpen.set(true); $name = step.name}} href={step.href} class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-yellow-700 text-center group cursor-pointer hover:border-yellow-400 duration-200">
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
        <!-- <i class={step.icon} /> -->
    </div>
    <!-- <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.image}</h3> -->
    <img src={step.image} alt="front-pic" class="mx-auto w-[17em]"/>
    
    <slot />
</a>

{#if $isOverlayOpen && $name === step.name}
    <Member>
        <img src={step.image} alt="front-pic"/>
        
        <div class="space flex flex-col text-1xl semibold text-left bg-pink gap-3">
            <h3 class="text-yellow-400">Name: <span class="text-white">{step.name} </span></h3> 
            <h3 class="text-yellow-400">Designation: <span class="text-white">{step.designation} </span></h3> 
            <h3 class="text-yellow-400">Email: <span class="text-white">{step.email} </span></h3> 
            <h3 class="text-yellow-400">About: <span class="text-white">{step.about} </span></h3> 
   
        </div>
        
    </Member>
{/if}

<style>
    .space{
        padding-top: 50px;
    }
</style>