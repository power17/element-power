<template>
    <main class="el-main">
        <slot />

    </main>
</template>
<script lang="ts">
export default {
    name: 'ElMain'
}
</script>
<style lang="scss">
@import '../styles/mixin';

@include b(main) {
    box-sizing: border-box;
    padding: $--main-padding;
}

</style>