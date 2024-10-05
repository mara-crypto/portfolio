<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
      
<!-- navbar section starts  -->
<NavBar/>


<!-- navbar section ends -->

<!-- contact section starts  -->

<section class="contact">

<h1 class="heading"> contact <span>me</span> </h1>

<div class="row">

    <div class="info-container">

        <h1>get in touch</h1>

        <p>If you have any questions or if you'd like to discuss potential collaboration opportunities, feel free to reach out. Please don't hesitate to contact me.</p>

        <div class="box-container">

            <div class="box">
                <i class="fas fa-map"></i>
                <div class="info">
                    <h3>address :</h3>
                    <p>Montreal, Canada</p>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-envelope"></i>
                <div class="info">
                    <h3>email :</h3>
                    <p>serigne.md.diop@gmail.com</p>
                </div>
            </div>

            <div class="box">
                <i class="fas fa-phone"></i>
                <div class="info">
                    <h3>WhatsApp number :</h3>
                    <p>+221 78 371 94 45</p>
                </div>
            </div>

        </div>

        <div class="share">
            <!-- <a href="https://www.facebook.com/FreeWebsiteCode/" class="fab fa-facebook-f"></a> -->
            <!-- <a href="https://www.instagram.com/smdmara/" class="fab fa-instagram"></a> -->
            <!-- <a href="https://twitter.com/serignemodoudi9" class="fab fa-twitter"></a> -->
            <!-- <a href="https://www.youtube.com/FreeWebsiteCode/videos" class="fab fa-youtube"></a> -->
            <a href="https://www.linkedin.com/in/serigne-modou-diop-761144247/" class="fab fa-linkedin"></a>
            <a href="https://github.com/mara-crypto" class="fab fa-github"></a>
    </div>

    </div>

    <form action="">

        <div class="inputBox">
            <input type="text" placeholder="your name">
            <input type="number" placeholder="your number">
        </div>

        <div class="inputBox">
            <input type="email" placeholder="your email">
            <input type="text" placeholder="your subject">
        </div>

        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message" class="btn">

    </form>

</div>

</section>

<!-- contact section ends -->


</template>
