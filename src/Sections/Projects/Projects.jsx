import styles from '../Projects/ProjectsStyle.module.css';
import viberr01 from '../../assets/viberr.png';
import viberr02 from '../../assets/ETS.png';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container} style={{ paddingTop: '80px' }}>  
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr01}
          link="https://github.com/Darker009/Employee-Management-System"
          h3="Employee Management"
          p="Deployed"
        />
      </div>
<br /><br />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr02}
          link="https://github.com/Darker009/ExpenseTrackerSystem"
          h3="Expense Tracker System"
          p="Deployed"
        />
      </div>
    </section>
  );
}

export default Projects;
