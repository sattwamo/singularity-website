<script>
    import "../app.css";
  import Mobnav from "../components/Mobnav.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import About from "../components/About.svelte";

    let y;
    let tabs = [
        {name: 'About Us', link: "#about", icon: "fa-solid fa-house"},
        {name: 'Events', link: "#events", icon: "fa-regular fa-calendar-days"},
        {name: 'Team', link: "#team", icon: "fa-solid fa-people-group"},
        {name: 'Contact Us', link: "#contact", icon: "fa-solid fa-paper-plane"},
    ]

    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView()
    }

</script>

<div class="relative flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    
    <div class={"fixed bottom-5 sm:bottom-0 w-full duration-200 flex p-10 z-[10] " + 
        (y > 0 ? 
            'opacity-full pointer-events-auto ' :
            'pointer-events-none opacity-0')}>
        <button on:click={goTop} class="ml-auto rounded-full bg-slate-900 text-yellow-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>    
    </div>

    <Header y={y} tabs={tabs}/>
    <slot />
    <About />
    <Footer />
    <Mobnav y={y} tabs={tabs}/>

</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
