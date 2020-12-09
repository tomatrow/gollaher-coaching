<script>
    import Input from "./Input.svelte"
    import Button from "./Button.svelte"
</script>

<div class="space-y-4 flex items-center flex-col sm:w-full">
    <Input class="w-full" type="text" placeholder=" Enter your full name" />
    <Input class="w-full" type="telephone" placeholder=" Enter your phone number" />
    <Input class="w-full" type="email" placeholder=" Enter your e-mail" />
    <Button class="mx-4">
        <span class="font-bauhaus px-4 sm:max-w-xs uppercase text-2xl">Book Now</span>
    </Button>
</div>
