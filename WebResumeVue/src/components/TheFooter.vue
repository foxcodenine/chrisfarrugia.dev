<template>
    <div class="footer" id="contacts">

        <p>chris12aug@yahoo.com</p>
                <p>+356 79310212</p>
                <p>61 'Koala',&nbsp;&nbsp;St&nbsp;Edward&nbsp;street,&nbsp;&nbsp;Birzebbuga,&nbsp;&nbsp;Malta EU</p>
    </div>
</template>

<!--------------------------------------------------------------------->

<script>
export default {

}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
.footer {

    color: lighten($color: $col-dark, $amount: 5%);
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    z-index: 10;
    background-color: lighten($color: $col-dark, $amount: 5%);
    width: 100%;
    color: $col-white;

    color: $col-white;
        margin-top: 0.5rem;

        padding: 1rem;
        text-align: center;
        letter-spacing: .2rem;
        font-size: 1.4rem;


    &__left {

        text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);

        p {
            // margin-bottom: .5rem;
            font-size: 1.2rem;
            font-family: $font-display;

            &:last-child {
                margin-top: -.3rem;
            }

            @include respond (1100) {
                font-size: 1.5rem;

            }

         
        }
    }

    &__right {
        opacity: 1;
    }

    &__link:visited,
    &__link:link {
        color: currentColor;
    }

    &__icon {

        height: 3.2rem;
        width: 3.2rem;
        fill: currentColor;
        border: 1px solid currentColor;
        border-radius: $border-radius;
        padding: .3rem;

        display: block;
        margin: auto;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);


        @include respond (1100) {
            height: 2.5rem;
            width: 2.5rem;
        }

        ;

        &:hover {
            background-color: $col-tertiary;
        }
    }

    &__bottom {
        grid-column: 1 / -1;
        
        color: $col-white;
        margin-top: 0.5rem;

        padding: 1rem;
        text-align: center;
        letter-spacing: .2rem;
    }

}
</style>