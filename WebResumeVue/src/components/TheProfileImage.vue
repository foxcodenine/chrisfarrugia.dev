<template>
        <div class="profile-image">
            <img src="/images/profile.jpg" alt="">            
        </div>
        <!-- <div class="profile-image-bottom"></div> -->
</template>

<!--------------------------------------------------------------------->

<script>
export default {

}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>


.profile-image {  
    grid-column: -6 / -2;
    grid-row: 2 / 4;
    transform: translateY(-2rem);
    z-index: 5;
    

    // border: 1rem solid $col-white;
    padding: 1rem;
    background-color: white;
    border-radius: $border-radius;
    margin-left: 2rem;
    // height: 52rem;
    z-index: 20;

    @include respond (1060) { 
        transform: translateY(2rem);
        grid-row: 2 / 3;      
    };

    @include respond (900) { 
        transform: translateY(0rem);
        grid-column: 2 / -2;
        grid-row: 2 / 3;
        margin-left: 0rem;
        height: 60vw;
        width: 60vw;
        margin: 0 auto
    };
    @include respond (750) { 

        height: calc(100vw - 16rem);
        width: calc(100vw - 16rem);
    };

    img {
        width: 100%;       
        height: 100%;

        object-fit: cover;
        object-position: 50% 30%;
        z-index: 20;
        box-shadow: $shadow-4;
        border-radius: $border-radius;

        // @include respond (750) { 
        //     width: 50vw;       
        //     height: 50vw; 
        // };
        
    }
}

</style>