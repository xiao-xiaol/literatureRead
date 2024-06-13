<script setup lang="ts">
// import VueOfficePdf from '@vue-office/pdf'
import pdfjsLib from 'pdfjs-dist/build/pdf.js'
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js?worker'
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'

const props = defineProps({
	file: {
		type: File,
		required: true,
	},
})

pdfjsLib.GlobalWorkerOptions.workerPort = new PdfjsWorker()

async function getPdf() {
	// 实例化pdf视图
	const pdfViewer = new PDFViewer({
		container: document.getElementById('pageContainer'),
	})

	// 加载pdf文件
	const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(props.file))

	// 使用await等待加载完毕
	const pdf = await loadingTask.promise

	// 开始绘制到dom
	pdfViewer.setDocument(pdf)
}

function listenSelectChange() {
	document.addEventListener('selectionchange', () => {
		const selection = document.getSelection()
		if (!selection)
			return

		console.log('[ selection ] >', selection)
		const selectStr = selection.toString()
		console.log('[ selectStr ] >', selectStr)
	})
}

onMounted(() => {
	watchEffect(getPdf)
	listenSelectChange()
})
</script>

<template>
	<div class="overflow-auto">
		<!-- <VueOfficePdf v-if="url" :src="url" class="h-full" /> -->
		<div id="pageContainer" class="h-full">
			<div id="viewer" class="pdfViewer" />
		</div>
	</div>
</template>

<style scoped>

</style>
