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
    // margin-top: 5rem;
    
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    row-gap: 2rem;
    column-gap: 3rem;
    align-items: end;

    margin: 5rem 0 3rem 0;
    

    // margin-bottom: 3rem;
    // @include respond (600) { 
    //     grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    // };        


    // @include respond (1059) { 
    //     grid-column: 2 / -2;
    //     column-gap: 5rem;
    //     transform: translateY(-1rem);
    // };

    &__item {
        width: 5rem;
        height: 5rem;
        padding: .2rem;
        fill: lighten($col-dark, 0%) !important;   
        border: $col-dark 1px solid;
        border-radius: $border-radius;
        // margin-top: 5rem;

        &--ps {
            border-radius: none;
        }

        &--bash {
            border: none;
            padding: 0;
        }
        &--rabbitmq {
            // border: none;
            padding: 1rem;
        }
        
        // @include respond (600) { 
        //     width: 3rem;
        //     height: 3rem;
        // };
        
        &--big {
            width: 5.5rem;
            height: 4.5rem; 
            transform: translateX(-.7rem)translateY(.3rem);

            @include respond (600) { 
                width: 3.7rem;
                height: 3.7rem;
            };
        }

        // &--space {
        //     grid-column: span 6;
        //     border: none;
        //     @include respond (1172) { grid-column: span 3; };
        //     @include respond (1059) { grid-column: span 4; };
        //     @include respond (979) { grid-column: span 3; };
        //     @include respond (894) { grid-column: span 1; margin-top: 3rem};
        //     @include respond (824) { grid-column: span 3; };
        //     @include respond (787) { grid-column: span 1; };
        //     @include respond (712) { grid-column: span 1; };
        //     // @include respond (600) { display: none };
        // }
    }
    img  {
        width: 5rem;
        height: 5rem;
        padding: 0;
        border: none;

        // @include respond (600) { 
        //     width: 3.2rem;
        //     height: 3.2rem;
        // };
    }
}
</style>