import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (    
    <div className={styles.mainContainer}>
      <div className={styles.miHistoria}>
        <p>Welcome!</p>
        <p>
        My creative journey has taken shape through this project, which turned into something personal. I navigated through web development, using technologies such as Node.js, Express, React, Redux, and PostgreSQL with Sequelize.
        </p>
        <p>
        Focused on the user experience, I designed an attractive and functional interface. From dynamic searches to creating custom Pokémon.
        </p>
        <p>
        On the back-end, I used Node.js, Express, and PostgreSQL with Sequelize to manage the database. While the PokeAPI provides abundant information about these Pokémon. The integration of Git and GitHub ensures robust version control.
        </p>
        <p>
        The practical application of React and Redux taught me the immense capability these technologies have when combined; I had never experienced such power in a web front-end before.
        </p>
        <p>
        This project allowed me to consolidate web development skills acquired in the boot camp, which was very rewarding. Immersing myself in the Pokémon universe was also interesting and nostalgic.
        </p>
        <p>
        This project is just one more step in this exciting journey as a web developer.
        </p>
        <p>
        I am very grateful to Henry for all the support provided throughout the academic period.
        </p>
        <p>
        You can see more of my work on my <a href="https://github.com/leonardobaranelli" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </div>
    </div>
  );
};

export default About;