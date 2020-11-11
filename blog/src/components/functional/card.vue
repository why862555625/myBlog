<template>

    <div class="shadow-outer">
        <div class="shadow-inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card"
    }
</script>

<style scoped>
    .shadow-inner {
        width: 100%;
        box-shadow: 7px 3px 6px rgba(0, 0, 0, 0.06);
    }

    .shadow-outer {
        width: 100%;
        box-shadow: -2px -1px 6px rgba(0, 0, 0, 0.06);
    }
</style>