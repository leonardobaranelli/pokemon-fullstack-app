import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (    
    <div className={styles.mainContainer}>
      <div className={styles.miHistoria}>
      <p>¡Bienvenido!</p>
        <p>
        Mi viaje creativo ha tomado forma a través de este proyecto que se transformó en algo personal. Navegué por el desarrollo web, utilizando tecnologías como Node.js, Express, React, Redux, y PostgreSQL con Sequelize.
        </p>
        <p>
          Enfocado en la experiencia del usuario, diseñé una interfaz atractiva y funcional. Desde búsquedas dinámicas hasta la creación de pokemons a medida.
        </p>
        <p>
          En el back-end, utilicé Node.js, Express, y PostgreSQL con Sequelize para gestionar la base de datos. Mientras que la pokeapi provee abundante información sobre dichos pokemons. La integración de Git y GitHub asegura una gestión de versiones sólida.
        </p>
        <p>
          La aplicación práctica de React y Redux me enseñó la inmensa capacidad que tienen ambas tecnologías en conjunto, nunca había experimentado tanta potencia en un front-end web.
        </p>
        <p>
          Este proyecto me permitió consolidar habilidades en desarrollo web vistas en el bootcamp, lo cual fue muy gratificante. La inmersión en el universo de los pokemons también fue interesante y nostálgica.
        </p>
        <p>
          Este proyecto es solo un paso más en este emocionante viaje como desarrollador web.
        </p>
        <p>
          Estoy muy agradecido con Henry por todo el soporte brindado durante todo el periodo académico.
        </p>
        <p>
          ¡Puedes ver más de mi trabajo en mi <a href="https://github.com/leonardobaranelli" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </div>
    </div>
  );
};

export default About;