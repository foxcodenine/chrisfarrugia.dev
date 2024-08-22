<template>

    <footer class="site-footer" id="contacts">
        <div class="footer-content">
            <p class="email">Email: <a href="mailto:chris12aug@yahoo.com">chris12aug@yahoo.com</a></p>
            <p class="phone">Phone: <a href="tel:+35679310212">+356 79310212</a></p>
            <address>
                https://www.linkedin.com/in/christopher-farrugia-3a51184b/
            </address>
        </div>
    </footer>

</template>

<!--------------------------------------------------------------------->

<script>
export default {

}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
.site-footer {
    background-color: lighten($color: $col-dark, $amount: 5%);
    grid-column: 1 / -1;
    width: 100%;
    padding: 20px;
    text-align: center;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    color: #F8F8FF; // Ghost white text color for better readability

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p, address {
            font-size: 14px;
            line-height: 1.5;
            a {
                color: #A4B0BE; // Soothing blue-gray for links
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>