<template>
    <ul class="technologies ">
        <!-- <span class="technologies__item technologies__item--space" ></span> -->
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-php" ></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-laravel"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-javascript"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-vue2"></use></svg>
        <svg class="technologies__item technologies__item--bash "><use href="../assets/svg/sprite.svg#icon-bash"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-go"></use></svg>
        <!-- <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-photoshop"></use></svg> -->
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-git"></use></svg>
 
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-mysql"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-mongodb"></use></svg>
        <svg class="technologies__item technologies__item--bash"><use href="../assets/svg/sprite.svg#icon-redis"></use></svg>
        <!-- <img class="technologies__item " src="../assets/svg/bash.svg"> -->
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-aws"></use></svg>
        <!-- <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-html"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-css"></use></svg> -->
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-sass"></use></svg>
        <svg class="technologies__item "><use href="../assets/svg/sprite.svg#icon-apache"></use></svg>
        <svg class="technologies__item technologies__item--rabbitmq"><use href="../assets/svg/sprite.svg#icon-rabbitmq"></use></svg>
        <svg class="technologies__item technologies__item--bash"><use href="../assets/svg/sprite.svg#icon-linux"></use></svg>
    </ul>
</template>

<!--------------------------------------------------------------------->

<script setup>
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
.technologies {
    grid-column: 2 / -2;
    grid-row: 4 / 5;
    transform: translateY(-2rem);
    z-index: 10;
    width: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    gap: 2rem 3rem; // Combined row and column gaps
    align-items: end;
    margin: 5rem 0 3rem 0; // Simplified margin definition

    &__item {
        width: 5rem;
        height: 5rem;
        padding: .2rem;
        fill: $col-dark; // Removed the lighten function as it has 0% change
        border: 1px solid $col-dark;
        border-radius: $border-radius;

        // Modifier classes for __item
        &--ps {
            border-radius: none;
        }
        &--bash {
            border: none;
            padding: 0;
        }
        &--rabbitmq {
            padding: 1rem;
        }
        &--big {
            width: 5.5rem;
            height: 4.5rem;
            transform: translate(-.7rem, .3rem);

            @include respond(600) {
                width: 3.7rem;
                height: 3.7rem;
            }
        }
    }

    img {
        width: 100%; // Changed to be responsive to container size
        height: 100%; // Height matches the width to maintain aspect ratio
        padding: 0;
        border: none;
    }
}
</style>
