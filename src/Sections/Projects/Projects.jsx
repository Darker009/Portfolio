import styles from '../Projects/ProjectsStyle.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container} style={{ paddingTop: '80px' }}>  
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Darker009/Employee-Management-System"
          h3="Employee Management"
          p="Deployed"
        />
      </div>
    </section>
  );
}

export default Projects;
