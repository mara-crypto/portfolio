<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
      
    <NavBar/>

    <!-- portfolio section starts  -->

    <section class="portfolio">

        <h1 class="heading"> <span>my</span> work </h1>

        <div class="box-container">

            <div class="box">
                <img src="../assets/image/traitementdedonnees.png" alt="traitement de donnees">
                <div class="content">
                    <h3>Data Processing with Python</h3>
                    <p>Development of a script to extract, process and validate data from a CSV file, automating the data cleansing process.
                    </p>
                    <a href="https://github.com/mara-crypto/Traitement-de-Donnees">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/gestion_planning.png" alt="">
                <div class="content">
                    <h3>Planning Management</h3>
                    <p>User-friendly schedule management for schools and academic institutes, offering simple visualization 
                        of class, teacher, room and module schedules, as well as easy creation of new schedules.
                    </p>
                    <a href="https://github.com/mara-crypto/Gestion-Planning">read more</a>
                </div>
            </div>
        
            <div class="box">
                <img src="../assets/image/Django3.png" alt="">
                <div class="content">
                    <h3>Website for booking rental services</h3>
                    <p>Online platform for hotel, car and restaurant reservations. 
                        Features: Search for services, online payment, reservation management, notifications.
                    </p>
                    <a href="https://github.com/mara-crypto/projet_django">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/api-rest1.png" alt="">
                <div class="content">
                    <h3>Scraping Project - API - JS</h3>
                    <p>The project aims to set up a REST API using the data obtained from the scraping part 
                        and to develop a front-end application to consume the created API.
                    </p>
                    <a href="#">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/elasticsearch.png" alt="">
                <div class="content">
                    <h3>THE MOVIE DB search engine</h3>
                    <p>Creation of an Elasticsearch search engine: data retrieval from The Movie Database API, insertion via Logstash, and a search interface.
                    </p>
                    <a href="https://github.com/mara-crypto/Elastic-Search">read more</a>
                </div>
            </div>

            <!-- <div class="box">
                <img src="images/img-6.jpg" alt="">
                <div class="content">
                    <h3>project 06</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                    <a href="#">read more</a>
                </div>
            </div> -->

        </div>

        <a id="read-more-link" class="btn"> load more <i class="fas fa-redo"></i> </a>

        <!-- <div class="box-container">
            
            <div class="box" name="additional-content" style="display: block;">
                <img src="../assets/image/api-rest1.png" alt="">
                <div class="content">
                    <h3>visualisation dashord</h3>
                    <p>The project aims to set up a REST API using the data obtained from the scraping part and to develop a front-end application to consume the created API.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div class="box" name="additional-content" style="display: block;">
                <img src="../assets/image/api-rest1.png" alt="">
                <div class="content">
                    <h3>visualisation dashord</h3>
                    <p>The project aims to set up a REST API using the data obtained from the scraping part and to develop a front-end application to consume the created API.</p>
                    <a href="#">Read More</a>
                </div>
            </div>

            <div class="box" name="additional-content" style="display: block;">
                <img src="../assets/image/elasticsearch.png" alt="">
                <div class content="">
                    <h3>machine learning </h3>
                    <p>Creation of an Elasticsearch search engine: data retrieval from The Movie Database API, insertion via Logstash, and a search interface.</p>
                    <a href="https://github.com/mara-crypto/Elastic-Search">Read More</a>
                </div>
            </div>

        </div> -->

        <!-- <a href="javascript:void(0);" class="btn" id="load-more-button">Load More <i class="fas fa-redo"></i></a> -->
                
    </section>

    <!-- portfolio section ends -->

</template>

