<script>
    export let step;
</script>

<a href={step.href} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-yellow-700 text-center group cursor-pointer hover:border-yellow-400 duration-200">
    <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
        <!-- <i class={step.icon} /> -->
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
    <slot />
</a>