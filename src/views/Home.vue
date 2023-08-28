<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template id="html">

    <NavBar/>
    
    <!-- home section starts  -->

    <section id="section" class="home">

        <div class="image">
            <img src="../assets/image/user.png" alt="user">
        </div>

        <div class="content">
            <h3>hi, i am Serigne Modou Diop</h3>
            <span>Data Scientist | Data Analyst | Data Engineer</span>
            <p>Resume</p>
            <router-link to="/about" class="btn"> about me <i class="fas fa-user"></i> </router-link>
        </div>

    </section>

    <!-- home section ends -->

</template>

