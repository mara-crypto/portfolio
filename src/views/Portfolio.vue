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
                    <h3>Traitement de Données avec python</h3>
                    <p>Développement d'un script pour récupérer des données à partir d'un fichier CSV, les traiter avec des opérations personnalisées, 
                        puis séparer les données valides et invalides dans deux fichiers CSV distincts. Cela a permis d'automatiser le processus de 
                        nettoyage des données et de garantir la qualité des informations.
                    </p>
                    <a href="https://github.com/mara-crypto/Traitement-de-Donnees">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/gestion_planning.png" alt="">
                <div class="content">
                    <h3>Gestion Planning</h3>
                    <p>Une application de gestion de plannings pour écoles ! Elle permet de visualiser facilement les plannings des classes, professeurs, 
                        salles et modules. Avec HTML, CSS et JS, l'interface est conviviale et la création de nouveaux plannings est un jeu d'enfant !
                    </p>
                    <a href="https://github.com/mara-crypto/Gestion-Planning">read more</a>
                </div>
            </div>
        
            <div class="box">
                <img src="../assets/image/Django3.png" alt="">
                <div class="content">
                    <h3>Site de réservation de services</h3>
                    <p>Objectifs du projet : Le projet vise à créer une plateforme de réservation en ligne
                        pour permettre aux utilisateurs de réserver des services tels que des chambres d'hôtel, des voitures de location, des restaurants.
                        - Fonctionnalités clés :
                        o Recherche de services :
                        o Paiement en ligne :
                        o Gestion des réservations
                        o Notifications.
                    </p>
                    <a href="https://github.com/mara-crypto/projet_django">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/api-rest1.png" alt="">
                <div class="content">
                    <h3>PROJET SCRAPING - API - JS</h3>
                    <p>L'objectif du projet est de mettre en place une API REST en utilisant les données
                        produites dans la partie scrapping, et de développer une application front-end
                        (HTML/CSS/JS) pour consommer l'API créée.
                    </p>
                    <a href="#">read more</a>
                </div>
            </div>

            <div class="box">
                <img src="../assets/image/elasticsearch.png" alt="">
                <div class="content">
                    <h3>Moteur de Recherche the moovie db</h3>
                    <p>L'objectif du projet etait de mettre en place un moteur de recherche en utilisant elasticsearch.
                        Recupérer les données depuis l'api de themooviedb,
                        Insérer les données grace a logstash,
                        Creation d'une interface pour rechercher et afficher le resultat des recherches.
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

        <a href="#" class="btn"> load more <i class="fas fa-redo"></i> </a>
        
    </section>

    <!-- portfolio section ends -->

</template>