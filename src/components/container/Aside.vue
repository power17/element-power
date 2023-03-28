<template>
    <aside class="el-aside" :style="{ width }">
        <slot />
    </aside>
</template>
<script lang="ts">
export default {
    name: 'ElAside'
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'
interface Props {
    width?: string
}
withDefaults(defineProps<Props>(), {
    width: '300px'
})
</script>