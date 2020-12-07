<style>
    button {
        border: double 0.125rem transparent;
        border-radius: 5rem;
        background-image: linear-gradient(to top right, #61bcd8, #233b87, #03050c),
            linear-gradient(to right, black, #68cbe1, white, #254190 45%, white, #243e8f);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
</style>

<button {...$$props}>
    <slot />
</button>
