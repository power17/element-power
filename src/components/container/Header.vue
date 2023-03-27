<template>
	<header class="el-header" :height="{ height }">
		<slot />
	</header>
</template>

<script lang="ts">
export default {
	name: 'ElHeader'
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'
interface Props {
	height?: string
}
withDefaults(defineProps<Props>(), {
	height: '60px'
})
</script>

<style></style>