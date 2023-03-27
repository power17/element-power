<template>
	<section class="el-container" :class="{ 'is-vertical': isVertical }">
		<slot />
	</section>
</template>

<script lang="ts">
export default {
	name: 'ElContainer'
}
</script>
<script setup lang="ts">
import { useSlots, computed, VNode, Component } from 'vue'
interface Props {
	direction?: String
}
const props = defineProps<Props>()
const slots = useSlots()
// console.log(slots.defaults())
// 判断是否需要垂直
const isVertical = computed(() => {
	if (slots && slots.default) {
		return slots.default().some((vn: VNode) => {
			const tag = (vn.type as Component).name
			console.log(tag)
			return tag === 'ElHeader' || tag === 'ElFooter'
		})
	} else {
		return props.direction === 'vertical'
	}
})

</script>

<style lang="scss">
@import '../styles/mixin';

@include b(container) {
	display: flex;
	flex-direction: row;
	flex: 1;
	box-sizing: border-box;
	flex-basis: auto;
	min-width: 0;
	// &.is-vertical{
	// 	flex-direction: column;
	// }
	@include when(vertical) {
		flex-direction: column;
	}
}
</style>