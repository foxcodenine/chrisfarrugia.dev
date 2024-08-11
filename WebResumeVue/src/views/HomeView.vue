<template>

	<div class="containt">
		<div class="circles">
			<div class="circles__profile"></div>
		</div>
		<div class="text">
			<div class="text__name">Christopher</div>
			<div class="text__surname">Farrugia</div>
			<div class="text__line"></div>
			<div class="text__small">software developer</div>
			<div class="text__small">linux geek</div>
			
<div class="text__small">linux geek</div>
		</div>
		<div class="btns">
			<button>Git Hub</button>
			<button>Linkedin</button>
			<button>CV</button>
		</div>
	</div>

	https://www.templateonweb.com/demo/f457c545a9ded88f18ecee47145a72c0
</template>

<script setup>

</script>

<style lang="scss" scoped>
.containt {
	background-color: white;
	background-image: url("@/assets/images/office.webp");
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	max-width: 600px;
	min-height: 100vh;
	margin: 0 auto;
}

.circles {

	background-color: white;
	background-image: url("@/assets/images/coding.jpg");
	background-size: cover;


	height: 90vw;
	width: 90vw;

	max-height: 33rem;
	max-width: 33rem;

	border-radius: 10%;
	border-top-left-radius: 50%;
	border-top-right-radius: 25%;

	opacity: .95;

	display: flex;
	align-items: center;
	justify-content: center;

	&__profile {
		background-color: white;
		background-image: url("@/assets/images/profile.jpg");
		background-size: cover;
		height: 80vw;
		width: 80vw;

		max-height: 30rem;
		max-width: 30rem;
		border-radius: 50%;
		transform: translateY(-0.5rem);
		
	}
}

.text {
	opacity: .9;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-shadow: 1px 1px 2px black;

	font-family: $font-display;
	width: 12rem;

	&__name, &__surname {
		font-size: 1.8rem;
		font-weight: 500;
		line-height: 1.6rem;
	}

	&__line {
	
		width: 100%;
		height: 1px;
		background-color: white;
		margin: .8rem 0;
	
	}
}

.btns {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;



	button {
		display: flex;

		align-items: center;
		justify-content: center;
		width: 12rem;
		padding: 0.5rem;
		border: none;
		margin-top: .5rem;
		border-radius: 3px;

	}
}
</style>
