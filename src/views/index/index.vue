<script setup lang="ts">
import Left from './Left.vue'
import Right from './Right.vue'
</script>

<template>
	<div class="flex h-full">
		<Left class="shadow-lg flex-1 h-full border rounded-xl p-2 bg-white min-w-[0] min-h-[0]" />
		<Right class="shadow-lg flex-1 h-full border rounded-xl p-2 bg-white ml-2 min-w-[0] min-h-[0]" />
	</div>
</template>

<style scoped>

</style>
