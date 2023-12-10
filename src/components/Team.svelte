<script>
  import Step from "./Step.svelte";

    import office from '../data/team.json'

</script>

<section id="team" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Meet the <span class="poppins text-yellow-400">Team</span></h3>
    <div class="h-[5rem]"/>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 mx-5 my-auto">
        {#each office as member, index}
            <Step step={member}>{member.designation}</Step>
        {/each}
    </div>
    <div class="h-[5rem]"/>

    <!-- <div class="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 m-auto justify-center">
        <Step step={office[0]}>image goes here</Step>
        <Step step={office[1]}>image goes here</Step>
        <Step step={office[2]}>image goes here</Step>
        <Step step={office[1]}>image goes here</Step>
        <Step step={office[2]}>image goes here</Step>
    </div> -->
</section>