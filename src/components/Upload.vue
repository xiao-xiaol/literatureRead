<script setup lang="ts">
const emits = defineEmits<{
	(e: 'change', file: File): void
}>()

const inputRef = shallowRef<HTMLInputElement>()

// 模拟input 输入框点击
function handleClick() {
	if (!inputRef.value)
		return

	inputRef.value.value = ''
	inputRef.value.click()
}

function handleKeydown() {
	handleClick()
}

function handleChange(e: Event) {
	const files = (e.target as HTMLInputElement).files

	if (files?.length)
		emits('change', files[0])
}
</script>

<template>
	<div tabindex="0" class="w-max" @click="handleClick" @keydown.self.enter.space="handleKeydown">
		<slot>
			<button class="border shadow border-gray-300">
				上传pdf文件
			</button>
		</slot>

		<input ref="inputRef" type="file" accept="application/pdf" class="hidden" @click.stop @change="handleChange">
	</div>
</template>

<style lang="scss" scoped>

</style>
