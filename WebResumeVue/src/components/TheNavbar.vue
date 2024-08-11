<template>
	<nav class="nav-bar" id="home">

		<ul class="top-links">
			<li class="top-links__item top-links__item--1"><a class="top-links__link"
					href="https://www.linkedin.com/in/christopher-farrugia-3a51184b/" target="_blank">Linkedin</a></li>
			<li class="top-links__item top-links__item--2"><a class="top-links__link"
					href="https://www.facebook.com/chrisfarrugia12/" target="_blank">Facebook</a></li>
			<li class="top-links__item top-links__item--3"><a class="top-links__link"
					href="https://github.com/foxcodenine" target="_blank">Github</a></li>

			<li v-on:click.prevent='false' class="top-links__item top-links__item--4 top-links__item--dd">
				<a class="top-links__link" href="#">Certifications</a>
				<ul class="dropdown">
					<li v-on:click="openCertifications('VETAward-min.png')" class="dropdown__item">MQF</li>
					<li v-on:click="openCertifications('zend.jpg')" class="dropdown__item">Zend</li>
					<li v-on:click="openCertifications('lpic1.png')" class="dropdown__item">Lpic-1</li>
				</ul>
			</li>

			<li class="top-links__item top-links__item--5 top-links__item--active"><a class="top-links__link"
					href="#contacts">Contact&nbsp;me</a></li>
		</ul>
	</nav>
</template>

<!--------------------------------------------------------------------->

<script>
export default {
	methods: {
		openCertifications(c) {
			this.$emit('openCertifications', c)
		}
	}
}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
// Navigation Bar
.nav-bar {
    grid-column: 2 / -2;
    grid-row: 1 / 2;
    z-index: 500;
    padding: 5rem 0 4rem;
    margin-bottom: 7rem;

    @include respond(900) {
        margin-bottom: 1rem;
    }
    @include respond(600) {
        padding: 5rem 0 3rem;
    }
    @include respond(500) {
        padding: 0rem 0 3rem;
    }
}

// Top links in navigation
.top-links {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    @include respond(900) {
        justify-content: space-between;
        width: 100%;
    }

    &__item {
        cursor: pointer;
        position: relative;
        border-radius: $border-radius;
        font-size: 1.6rem;
        background-color: rgba($col-tertiary, 0.3);
        transition: all 0.1s ease-out;
        box-shadow: $shadow-3;
        text-decoration: none;
        text-shadow: 1px 1px 2px lighten($col-tertiary, 5%);
        width: 14rem;
        text-align: center;

        @include respond(900) {
            flex: 1;
        }
        @include respond(700) {
            &--2 {
                display: none;
            }
        }
        @include respond(900) {
            &--4 {
                display: none;
            }
        }
        @include respond(500) {
            &--1, &--3, &--5 {
                display: none;
            }
        }

        &:hover {
            transform: translateY(-3px);
            background-color: lighten($col-tertiary, 5%);
        }
        &:active {
            transform: translateY(-2px);
        }
        &:focus {
            outline: none;
        }

        // Dropdown hover functionality
        &--dd {
            z-index: 5000;
            &:hover > .dropdown {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    // Links within top links
    &__link {
        padding: 0.3rem 2rem;
        display: block;
        color: currentColor;
        text-decoration: none;
        &:link, &:visited {
            color: currentColor;
        }
    }
}

// Dropdown menu styles
.dropdown {
    position: absolute;
    list-style: none;
    text-align: center;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.1s ease-out;

    &__item {
        background-color: lighten($col-tertiary, 5%);
        margin-top: 0.2rem;
        padding: 0.1rem 2rem;
        box-shadow: $shadow-3;
        border-radius: $border-radius;

        &:hover {
            background-color: $col-primary;
            color: $col-white;
            text-shadow: none;
        }
    }
}
</style>

