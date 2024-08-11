<template>
    <div class="hero">


        <div class="hero__title">
            Chris&nbsp;Farrugia
        </div>
        <div class="hero__text">

            <span class="hero__highlighted">
                Hi, I'm Chris. I am a seasoned <b>Software Developer</b> with over 6 years
                of experience and a self-taught expert in the field. Specializing in
                full-stack development, I excel in both front-end and back-end
                technologies, including <b>Vue.js</b>, <b>Laravel</b>, <b>Node.js</b>, and advanced <b>Linux</b>
                server administration.
            </span>
            <br>
            <span class="hero__highlighted">
                Throughout my career, I've led the way in <b>IoT</b> integrations, particularly with technologies like LoRa,
                Sigfox, and NB-IoT, developing real-time, data-driven applications that enhance user interactions. I'm
                currently expanding my skills in <b>Go programming</b> and aspire to leverage my deep technical expertise and
                innovative approach to contribute significantly to Golang-centric projects, especially those focusing on
                microservice architecture.
            </span>

        </div>

        <div class="hero__btns">
            <base-button class="btn--tertiary" myLink='https://foxcode.io/010'>View&nbsp;my&nbsp;CV</base-button>
            <base-button class="btn--tertiary btn--git" myLink='https://github.com/foxcodenine'>
                <svg class="git">
                    <use href="@/assets/svg/sprite.svg#icon-github"></use>
                </svg>
            </base-button>
        </div>



    </div>
</template>

<!--------------------------------------------------------------------->

<script setup>
import BaseButton from "./UI/BaseButton.vue";

</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
// General settings for icons
.git {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
}

// Hero section styling
.hero {
    display: grid;
    grid-column: 2 / -2;
    grid-row: 2 / 4;
    grid-template-columns: repeat(12, 1fr);
    z-index: 10;

    @include respond(900) {
        grid-row: 3 / 4;
    }

    // Title settings within hero
    &__title {
        font-size: 6rem;
        font-weight: 600;
        font-family: $font-display;
        color: lighten($col-dark, 5%);
        fill: $col-white;
        position: relative;
        z-index: 20;
        text-shadow: 1px 1px 2px $col-tertiary;
        grid-column: 1 / 7;

        @include respond(1059) {
            font-size: 5rem;
        }
        @include respond(900) {
            font-size: 4rem;
            text-transform: uppercase;
            text-align: center;
            grid-column: 1 / -1;
            border: 1px solid white;
            margin: 3rem 0;
        }
        @include respond(450) {
            font-size: 3rem;
        }
        @include respond(390) {
            font-size: 2.5rem;
        }
    }

    // Text settings within hero
    &__text {
        color: lighten($col-dark, 5%);
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: .05rem;
        margin-bottom: 4rem;
        grid-column: 1 / 8;
        b {
            font-weight: 600;
        }
        @include respond(900) {
            grid-column: 1 / -1;
            font-size: 1.6rem;
            grid-row: 2 / 3;
            text-align: justify;
        }
    }

    // Highlighted text style
    &__highlighted {
        background: linear-gradient(to top, $col-tertiary 55%, transparent 85%);
        padding: 2px 3px;
        color: black;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    // Button settings within hero
    &__btns {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 6rem;
        grid-column: 1 / 7;

        @include respond(1059) {
            margin-bottom: 8rem;
        }
    }
}
</style>
