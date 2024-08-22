<template>
    <nav class="nav-bar" id="home">

        <ul class="top-links">
            <li class="top-links__item top-links__item--1"><a class="top-links__link"
                    href="https://www.linkedin.com/in/christopher-farrugia-3a51184b/" target="_blank">Linkedin</a></li>
                    
            <li class="top-links__item top-links__item--2"><a class="top-links__link"
                    href="https://www.facebook.com/chrisfarrugia12/" target="_blank">Facebook</a></li>

            <li class="top-links__item top-links__item--3"><a class="top-links__link"
                    href="https://github.com/foxcodenine" target="_blank">Github</a></li>

            <li class="top-links__item top-links__item--4" @click="showMultiple"><a class="top-links__link">Certificates</a> </li>

            <li class="top-links__item top-links__item--5 top-links__item--active"><a class="top-links__link"
                    href="#contacts">Contacts</a></li>
        </ul>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </nav>
</template>

<!--------------------------------------------------------------------->

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'


const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])


function onShow() {
    visibleRef.value = true;
}

function showMultiple() {
    imgsRef.value = [  
        'images/certifications/lpic1.png',
        'images/certifications/zend.jpg',
        'images/certifications/VETAward-min.png',
        'images/certifications/UC-Vue.jpg',
        'images/certifications/UC-NodeJS.jpg',
        'images/certifications/UC-Docker.jpg',
        'images/certifications/UC-Golang-Web.jpg',
        'images/certifications/UC-Laravel.jpg',
        'images/certifications/UC-Apache.jpg',
        'images/certifications/UC-Tailwind.jpg',
        'images/certifications/UC-Web-App-Deploy.jpg',
        'images/certifications/UC-Adv-Css-Sass.jpg',
        'images/certifications/UC-JavaScript.jpg',
    ]

    indexRef.value = 0 // index of imgList
    onShow()
}

function onHide() { visibleRef.value = false }

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

    @include respond(400) {
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

        @include respond(900) { flex: 1; }

        @include respond(700) { &--2 { display: none; } }

        @include respond(900) { &--3 { display: none; } }

        @include respond(400) {
            &--1,
            &--4,
            &--5 {
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

            &:hover>.dropdown {
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

        &:link,
        &:visited {
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
        padding: 0.1rem 0rem;
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
