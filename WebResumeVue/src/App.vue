<template>
	<div class="app">

		<RouterView></RouterView>


	</div>

</template>

<!-- --------------------------------------------------------------- -->

<script setup>

import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';





</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
.app {
	width: 100%;
	max-width: 122rem;
	margin: 0 auto;
	background-color: $col-white;

	padding: 0.5rem;

	// min-height: 100rem;
	// margin-bottom: 10rem;
	background-color: $col-white;
	position: relative;



}

</style>
