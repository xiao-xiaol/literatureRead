<script setup lang="ts">
import Upload from '@/components/Upload.vue'
import PdfView from '@/components/PdfView.vue'

const resolveFile = ref<File>()

function handleFileChange(file: File) {
	resolveFile.value = file
}
</script>

<template>
	<div class="flex flex-col">
		<Upload v-if="!resolveFile" class="mx-auto relative top-1/2 -translate-y-1/2" @change="handleFileChange" />
		<template v-else>
			<div class=" border-b-2 pr-2 pb-2 mb-2">
				<div class="w-max ml-auto">
					<Upload @change="handleFileChange">
						<span class="cursor-pointer text-blue-400">重传</span>
					</Upload>
				</div>
			</div>

			<PdfView :file="resolveFile" class="flex-1 min-h-[0] border" />
		</template>
	</div>
</template>

<style scoped>

</style>
