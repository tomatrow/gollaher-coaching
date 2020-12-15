<script>
    import { email, phone, name, onBook } from "../utility.js"
    import Input from "./Input.svelte"
</script>

<div class="space-y-4 flex items-center flex-col sm:w-full">
    <Input class="w-full" type="text" bind:value={$name} placeholder=" Enter your full name" />
    <Input
        class="w-full"
        type="telephone"
        bind:value={$phone}
        placeholder=" Enter your phone number" />
    <Input class="w-full" type="email" bind:value={$email} placeholder=" Enter your e-mail" />
    <button class="button mx-4" on:click={onBook}>
        <span class="font-bauhaus px-4 sm:max-w-xs uppercase text-2xl">Book Now</span>
    </button>
</div>
