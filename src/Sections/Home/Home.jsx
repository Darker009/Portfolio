import styles from '../Home/HomeStyle.module.css';
import heroImg from '../../assets/Sudarshan.png';
import twitter from '../../assets/twitter-light.svg';
import github from '../../assets/github-light.svg';
import linkedin from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';

function Home() {
  return (
    <section id="hero" className={styles.container} style={{ paddingTop: '80px' }}>  
      <div className={styles.imageContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Sudarshan Bhosale"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sudarshan
          <br />
          Bhosale
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={github} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedin} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about developing modern web apps for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
