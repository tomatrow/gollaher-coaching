<script>
    import { email, onSubscribe } from "../../utility.js"
    import Section from "../../components/Section.svelte"
    import Input from "../../components/Input.svelte"
</script>

<Section
    class="space-y-4 sm:space-x-4 flex items-center flex-col sm:flex-row sm:justify-around text-white">
    <div class="flex flex-col text-center">
        <span class="font-bauhaus uppercase text-3xl">The 7 Tips to the Healthier You</span>
        <span class="font-secondary font-bold text-lg">Join the community now and get the free
            resource in building up your emotional IQ</span>
    </div>
    <div class="space-y-4 flex flex-col">
        <Input type="email" bind:value={$email} placeholder=" Email" />
        <button class="button font-bauhaus uppercase" on:click={onSubscribe}>
            <span clas="px-4 text-5xl">Get the Resource</span>
        </button>
    </div>
</Section>
