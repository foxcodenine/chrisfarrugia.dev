<template>
	<div class="grid">

		<div class="top__bg"></div>
		<!-- <div class="middle__bg"></div> -->

		<the-navbar></the-navbar>
		<the-hero></the-hero>
		<the-profile-image></the-profile-image>
		<the-technologies></the-technologies>

		<the-footer></the-footer>
		<the-arrow></the-arrow>

	</div>
</template>

<!-- --------------------------------------------------------------- -->

<script setup>

import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import TheProfileImage from "@/components/TheProfileImage.vue";
import TheTechnologies from "@/components/TheTechnologies.vue";

import TheFooter from "@/components/TheFooter.vue";
import TheArrow from "@/components/TheArrow.vue";


import { ref } from "vue";

const showCertification = ref(false);
const image = ref(false);



</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: 8rem repeat(12, 1fr) 8rem;
	grid-template-rows: max-content max-content max-content 1fr max-content;
	min-height: calc(100vh - 1rem);


	@include respond (500) {
		grid-template-columns: 4rem repeat(12, 1fr) 4rem;
	}

	;
}

.top__bg {
	grid-column: 1 / -1;
	grid-row: 1 / 5;
	// clip-path: polygon(0 0 , 100% 0, 100% 80%, 0% 90%);
	// margin-bottom: -3rem;

}

.top__bg,
.middle__bg {
	background-color: lighten($col-light, 5%);
	z-index: 1;
	position: relative;


	&::before {
		content: '';
		background-image: url('/images/coding.webp'), url('');
		background-size: cover;
		background-position-y: -20rem;
		background-size: 100%;
		background-repeat: repeat;
		opacity: .45;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2;

		@include respond (1200) {
			background-position-y: -15rem;
		}

		@include respond (1100) {
			background-position-y: -10rem;
		}

		@include respond (1000) {
			background-position-y: -5rem;
		}

		@include respond (900) {
			background-position-y: -0rem;
		}

	}
}


.middle__bg {
	grid-column: 1 / -1;
	grid-row: 5 / 6;
	clip-path: polygon(0 7%, 100% 10%, 100% 100%, 0% 100%);
	background-position-y: 0rem;
	margin-top: -2rem;

	@include respond (899) {
		margin-top: -8rem;
	}

	@include respond (824) {
		margin-top: -2rem;
	}

	@include respond (791) {
		margin-top: -8rem;
	}

	&::before {
		content: '';
		background-position-y: 0rem;

		@include respond (600) {
			background-position-y: 20rem;
		}		
	}
}


</style>
