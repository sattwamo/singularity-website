<script>
    import { isOverlayOpen, name } from "../stores/OverlayStore.js";
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center opacity-95" on:click={() => {isOverlayOpen.set(false); $name = "x"}}>
    <div class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-100" on:click|stopPropagation>
        <button class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform" on:click={() => {isOverlayOpen.set(false); $name = "x"}}>&times;</button>
        <slot />
    </div>
</div>
